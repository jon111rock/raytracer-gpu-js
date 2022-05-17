import React, { Component } from "react";
import PubSub from "pubsub-js";
import { GPU } from "./modules/gpu";
import { Vector3, normalize, cross } from "./modules/vec3";
import spheres from "./Objects/Spheres";
import lights from "./Objects/Lights";
import "./index.css";
import { UPDATE_OBJECT } from "../../event-types";

let gpu = new GPU();

/************
 * Function *
 ************/
function unitVectorX(vx, vy, vz) {
  let length = Math.sqrt(vx * vx + vy * vy + vz * vz);
  let div = 1.0 / length;
  return div * vx;
}

function unitVectorY(vx, vy, vz) {
  let length = Math.sqrt(vx * vx + vy * vy + vz * vz);
  let div = 1.0 / length;
  return div * vy;
}

function unitVectorZ(vx, vy, vz) {
  let length = Math.sqrt(vx * vx + vy * vy + vz * vz);
  let div = 1.0 / length;
  return div * vz;
}

function dot(v1_x, v1_y, v1_z, v2_x, v2_y, v2_z) {
  return v1_x * v2_x + v1_y * v2_y + v1_z * v2_z;
}

function degreesToRadians(degrees) {
  var pi = Math.PI;
  return degrees * (pi / 180);
}

function intersectRaySphere(
  sphere_center_x,
  sphere_center_y,
  sphere_center_z,
  sphere_radius,
  ray_o_x,
  ray_o_y,
  ray_o_z,
  ray_d_x,
  ray_d_y,
  ray_d_z
) {
  let oc_x = ray_o_x - sphere_center_x;
  let oc_y = ray_o_y - sphere_center_y;
  let oc_z = ray_o_z - sphere_center_z;
  let a = ray_d_x * ray_d_x + ray_d_y * ray_d_y + ray_d_z * ray_d_z;
  let b = 2 * (oc_x * ray_d_x + oc_y * ray_d_y + oc_z * ray_d_z);
  let c =
    oc_x * oc_x + oc_y * oc_y + oc_z * oc_z - sphere_radius * sphere_radius;
  let discriminant = b * b - 4 * a * c;
  if (discriminant < 0) {
    return [this.constants.INFINITY, this.constants.INFINITY];
  } else {
    return [
      (-b - Math.sqrt(discriminant)) / (2.0 * a),
      (-b + Math.sqrt(discriminant)) / (2.0 * a),
    ];
  }
}

function reflectVector(ray_x, ray_y, ray_z, normal_x, normal_y, normal_z) {
  let n_dot_r = normal_x * ray_x + normal_y * ray_y + normal_z * ray_z;
  return [
    2 * normal_x * n_dot_r - ray_x,
    2 * normal_y * n_dot_r - ray_y,
    2 * normal_z * n_dot_r - ray_z,
  ];
}

function createCamera(lookfrom, lookat, vup, vfov) {
  let thera = degreesToRadians(vfov);
  let h = Math.tan(thera / 2);
  let viewportHeight = 2 * h;
  let viewportWidth = aspectRatio * viewportHeight;

  let w = normalize(lookfrom.sub(lookat));
  let u = normalize(cross(vup, w));
  let v = cross(w, u);

  const origin = lookfrom;
  const horizontal = u.multiplyScalar(viewportWidth);
  const vertical = v.multiplyScalar(viewportHeight);
  const lowerLeftCorner = origin
    .sub(horizontal.divideScalar(2))
    .sub(vertical.divideScalar(2))
    .sub(w);

  return [
    origin.toArray(),
    horizontal.toArray(),
    vertical.toArray(),
    lowerLeftCorner.toArray(),
  ];
}

let kernelFunctions = [
  unitVectorX,
  unitVectorY,
  unitVectorZ,
  dot,
  degreesToRadians,
  intersectRaySphere,
  reflectVector,
];
kernelFunctions.forEach((f) => gpu.addFunction(f));

/**********
 * Image *
 **********/
const aspectRatio = 16 / 9;
const imageWidth = 800,
  imageHeight = parseInt(imageWidth / aspectRatio);

/***********
 * Camera *
 ***********/
let lookfrom = new Vector3(1, 0.5, 4);
let lookat = new Vector3(0.5, 0, -1);
let vup = new Vector3(0, 1, 0);
let vfov = 36;
let camera = createCamera(lookfrom, lookat, vup, vfov);

/***********
 * Kernael *
 ***********/
const settings = {
  constants: {
    LIGHTSCOUNT: lights.length,
    SPHERESCOUNT: spheres.length,
    INFINITY: Number.MAX_SAFE_INTEGER,
  },
  output: [imageWidth, imageHeight],
  graphical: true,
};
const render = gpu.createKernel(function (w, h, camera, lights, spheres) {
  let u = this.thread.x / w;
  let v = this.thread.y / h;

  //#region first iterator value
  //camera
  let horizontal_x = camera[1][0];
  let horizontal_y = camera[1][1];
  let horizontal_z = camera[1][2];

  let vertical_x = camera[2][0];
  let vertical_y = camera[2][1];
  let vertical_z = camera[2][2];

  let lowerLeftCorner_x = camera[3][0];
  let lowerLeftCorner_y = camera[3][1];
  let lowerLeftCorner_z = camera[3][2];

  //ray
  let ray_o_x = camera[0][0];
  let ray_o_y = camera[0][1];
  let ray_o_z = camera[0][2];

  let ray_d_x = lowerLeftCorner_x + u * horizontal_x + v * vertical_x - ray_o_x;
  let ray_d_y = lowerLeftCorner_y + u * horizontal_y + v * vertical_y - ray_o_y;
  let ray_d_z = lowerLeftCorner_z + u * horizontal_z + v * vertical_z - ray_o_z;

  let final_color_r = 0;
  let final_color_g = 0;
  let final_color_b = 0;

  // backgroundColor
  let t = 0.5 * 1.2;
  let backgroundColor = [
    (1 - t) * 1 + t * 0.5,
    (1 - t) * 1 + t * 0.7,
    (1 - t) * 1 + t * 1,
  ];

  let t_min = 0.001;
  let t_max = this.constants.INFINITY;
  //#endregion

  //#region find closest_t

  //closest sphere init
  let closest_t = this.constants.INFINITY;
  let closest_sphere_center_x = 0;
  let closest_sphere_center_y = 0;
  let closest_sphere_center_z = 0;
  let closest_sphere_color_r = 0;
  let closest_sphere_color_g = 0;
  let closest_sphere_color_b = 0;
  let closest_sphere_radius = 0;
  let closest_sphere_shine = 0;
  let closest_sphere_reflect = 0;
  for (let i = 0; i < this.constants.SPHERESCOUNT; i++) {
    //
    let current_sphere_center_x = spheres[i][0];
    let current_sphere_center_y = spheres[i][1];
    let current_sphere_center_z = spheres[i][2];
    let current_sphere_radius = spheres[i][6];

    let ts = intersectRaySphere(
      current_sphere_center_x,
      current_sphere_center_y,
      current_sphere_center_z,
      current_sphere_radius,
      ray_o_x,
      ray_o_y,
      ray_o_z,
      ray_d_x,
      ray_d_y,
      ray_d_z
    );
    if (ts[0] < closest_t && t_min <= ts[0] && ts[0] <= t_max) {
      closest_t = ts[0];

      closest_sphere_center_x = spheres[i][0];
      closest_sphere_center_y = spheres[i][1];
      closest_sphere_center_z = spheres[i][2];
      closest_sphere_color_r = spheres[i][3];
      closest_sphere_color_g = spheres[i][4];
      closest_sphere_color_b = spheres[i][5];
      closest_sphere_radius = spheres[i][6];
      closest_sphere_shine = spheres[i][7];
      closest_sphere_reflect = spheres[i][8];
    }
    if (ts[1] < closest_t && t_min <= ts[1] && ts[1] <= t_max) {
      closest_t = ts[1];

      closest_sphere_center_x = spheres[i][0];
      closest_sphere_center_y = spheres[i][1];
      closest_sphere_center_z = spheres[i][2];
      closest_sphere_color_r = spheres[i][3];
      closest_sphere_color_g = spheres[i][4];
      closest_sphere_color_b = spheres[i][5];
      closest_sphere_radius = spheres[i][6];
      closest_sphere_shine = spheres[i][7];
      closest_sphere_reflect = spheres[i][8];
    }
    // closest_sphere
  }
  //#endregion

  let temp_color_r = 0;
  let temp_color_g = 0;
  let temp_color_b = 0;

  let reflect_color_r = 0;
  let reflect_color_g = 0;
  let reflect_color_b = 0;

  let reflect_sphere_first_r = 0;

  if (closest_t == this.constants.INFINITY) {
    //沒打到東西 返回背景顏色
    temp_color_r = backgroundColor[0];
    temp_color_g = backgroundColor[1];
    temp_color_b = backgroundColor[2];
  } else {
    // 有打到東西 計算光線

    //#region compute lighting
    let lighting = 0;
    let hitPoint_x = ray_o_x + closest_t * ray_d_x;
    let hitPoint_y = ray_o_y + closest_t * ray_d_y;
    let hitPoint_z = ray_o_z + closest_t * ray_d_z;

    let hitNormal_x = hitPoint_x - closest_sphere_center_x;
    let hitNormal_y = hitPoint_y - closest_sphere_center_y;
    let hitNormal_z = hitPoint_z - closest_sphere_center_z;
    let hitNormal_ux = unitVectorX(hitNormal_x, hitNormal_y, hitNormal_z);
    let hitNormal_uy = unitVectorY(hitNormal_x, hitNormal_y, hitNormal_z);
    let hitNormal_uz = unitVectorZ(hitNormal_x, hitNormal_y, hitNormal_z);

    for (let i = 0; i < this.constants.LIGHTSCOUNT; i++) {
      let lightType = lights[i][0];
      let lightIntensity = lights[i][1];
      let lightPosition_x = lights[i][2];
      let lightPosition_y = lights[i][3];
      let lightPosition_z = lights[i][4];
      let L_x = 0;
      let L_y = 0;
      let L_z = 0;
      if (lightType == 0) {
        // ambient
        lighting += lightIntensity;
      } else {
        if (lightType == 1) {
          // point
          L_x = lightPosition_x - hitPoint_x;
          L_y = lightPosition_y - hitPoint_y;
          L_z = lightPosition_z - hitPoint_z;
        } else {
          // directional
          L_x = lightPosition_x;
          L_y = lightPosition_y;
          L_z = lightPosition_z;
        }

        // shadow
        let shadow_ray_o_x = hitPoint_x;
        let shadow_ray_o_y = hitPoint_y;
        let shadow_ray_o_z = hitPoint_z;
        let shadow_ray_d_x = L_x;
        let shadow_ray_d_y = L_y;
        let shadow_ray_d_z = L_z;

        let shadow_t = this.constants.INFINITY;
        for (let i = 0; i < this.constants.SPHERESCOUNT; i++) {
          let current_sphere_center_x = spheres[i][0];
          let current_sphere_center_y = spheres[i][1];
          let current_sphere_center_z = spheres[i][2];
          let current_sphere_radius = spheres[i][6];

          let ts = intersectRaySphere(
            current_sphere_center_x,
            current_sphere_center_y,
            current_sphere_center_z,
            current_sphere_radius,
            shadow_ray_o_x,
            shadow_ray_o_y,
            shadow_ray_o_z,
            shadow_ray_d_x,
            shadow_ray_d_y,
            shadow_ray_d_z
          );

          if (ts[0] < closest_t && t_min <= ts[0] && ts[0] <= t_max) {
            shadow_t = ts[0];
          }
          if (ts[1] < closest_t && t_min <= ts[1] && ts[1] <= t_max) {
            shadow_t = ts[1];
          }
        }
        if (shadow_t != this.constants.INFINITY) {
          continue;
        }

        // diffuse
        let N_dot_L = dot(
          hitNormal_ux,
          hitNormal_uy,
          hitNormal_uz,
          L_x,
          L_y,
          L_z
        );
        if (N_dot_L > 0) {
          let length_N = Math.sqrt(
            hitPoint_x * hitPoint_x +
              hitPoint_y * hitPoint_y +
              hitPoint_z * hitPoint_z
          );
          let length_L = Math.sqrt(L_x * L_x + L_y * L_y + L_z * L_z);
          lighting += (lightIntensity * N_dot_L) / (length_N * length_L);
        }

        // Specular
        if (closest_sphere_shine != -1) {
          let R_x = 2 * hitNormal_ux * N_dot_L - L_x;
          let R_y = 2 * hitNormal_uy * N_dot_L - L_y;
          let R_z = 2 * hitNormal_uz * N_dot_L - L_z;
          let V_x = -1 * ray_d_x;
          let V_y = -1 * ray_d_y;
          let V_z = -1 * ray_d_z;
          let R_dot_V = dot(R_x, R_y, R_z, V_x, V_y, V_z);
          let length_R = Math.sqrt(R_x * R_x + R_y * R_y + R_z * R_z);
          let length_V = Math.sqrt(V_x * V_x + V_y * V_y + V_z * V_z);

          if (R_dot_V > 0) {
            lighting +=
              lightIntensity *
              Math.pow(R_dot_V / (length_R * length_V), closest_sphere_shine);
          }
        }
      }
    }
    //#endregion

    temp_color_r = closest_sphere_color_r * lighting; // local color
    temp_color_g = closest_sphere_color_g * lighting;
    temp_color_b = closest_sphere_color_b * lighting;

    //compute reflect
    reflect_sphere_first_r = closest_sphere_reflect;
    if (reflect_sphere_first_r >= 0) {
      let R = reflectVector(
        -ray_d_x,
        -ray_d_y,
        -ray_d_z,
        hitNormal_ux,
        hitNormal_uy,
        hitNormal_uz
      );

      let reflect_ray_o_x = hitPoint_x;
      let reflect_ray_o_y = hitPoint_y;
      let reflect_ray_o_z = hitPoint_z;

      let reflect_ray_d_x = R[0];
      let reflect_ray_d_y = R[1];
      let reflect_ray_d_z = R[2];

      //#region find reflect closest_t

      //closest sphere init
      let closest_t = this.constants.INFINITY;
      let closest_sphere_center_x = 0;
      let closest_sphere_center_y = 0;
      let closest_sphere_center_z = 0;
      let closest_sphere_color_r = 0;
      let closest_sphere_color_g = 0;
      let closest_sphere_color_b = 0;
      let closest_sphere_radius = 0;
      let closest_sphere_shine = 0;
      let closest_sphere_reflect = 0;
      for (let i = 0; i < this.constants.SPHERESCOUNT; i++) {
        //
        let current_sphere_center_x = spheres[i][0];
        let current_sphere_center_y = spheres[i][1];
        let current_sphere_center_z = spheres[i][2];
        let current_sphere_radius = spheres[i][6];

        let ts = intersectRaySphere(
          current_sphere_center_x,
          current_sphere_center_y,
          current_sphere_center_z,
          current_sphere_radius,
          reflect_ray_o_x,
          reflect_ray_o_y,
          reflect_ray_o_z,
          reflect_ray_d_x,
          reflect_ray_d_y,
          reflect_ray_d_z
        );
        if (ts[0] < closest_t && t_min <= ts[0] && ts[0] <= t_max) {
          closest_t = ts[0];

          closest_sphere_center_x = spheres[i][0];
          closest_sphere_center_y = spheres[i][1];
          closest_sphere_center_z = spheres[i][2];
          closest_sphere_color_r = spheres[i][3];
          closest_sphere_color_g = spheres[i][4];
          closest_sphere_color_b = spheres[i][5];
          closest_sphere_radius = spheres[i][6];
          closest_sphere_shine = spheres[i][7];
          closest_sphere_reflect = spheres[i][8];
        }
        if (ts[1] < closest_t && t_min <= ts[1] && ts[1] <= t_max) {
          closest_t = ts[1];

          closest_sphere_center_x = spheres[i][0];
          closest_sphere_center_y = spheres[i][1];
          closest_sphere_center_z = spheres[i][2];
          closest_sphere_color_r = spheres[i][3];
          closest_sphere_color_g = spheres[i][4];
          closest_sphere_color_b = spheres[i][5];
          closest_sphere_radius = spheres[i][6];
          closest_sphere_shine = spheres[i][7];
          closest_sphere_reflect = spheres[i][8];
        }
        // closest_sphere
      }
      //#endregion

      if (closest_t == this.constants.INFINITY) {
        //沒打到東西 返回背景顏色
        reflect_color_r = backgroundColor[0];
        reflect_color_g = backgroundColor[1];
        reflect_color_b = backgroundColor[2];
      } else {
        // 打到東西 計算反射
        //#region compute lighting
        let lighting = 0;
        let hitPoint_x = reflect_ray_o_x + closest_t * reflect_ray_d_x;
        let hitPoint_y = reflect_ray_o_y + closest_t * reflect_ray_d_y;
        let hitPoint_z = reflect_ray_o_z + closest_t * reflect_ray_d_z;

        let hitNormal_x = hitPoint_x - closest_sphere_center_x;
        let hitNormal_y = hitPoint_y - closest_sphere_center_y;
        let hitNormal_z = hitPoint_z - closest_sphere_center_z;
        let hitNormal_ux = unitVectorX(hitNormal_x, hitNormal_y, hitNormal_z);
        let hitNormal_uy = unitVectorY(hitNormal_x, hitNormal_y, hitNormal_z);
        let hitNormal_uz = unitVectorZ(hitNormal_x, hitNormal_y, hitNormal_z);

        for (let i = 0; i < this.constants.LIGHTSCOUNT; i++) {
          let lightType = lights[i][0];
          let lightIntensity = lights[i][1];
          let lightPosition_x = lights[i][2];
          let lightPosition_y = lights[i][3];
          let lightPosition_z = lights[i][4];
          let L_x = 0;
          let L_y = 0;
          let L_z = 0;
          if (lightType == 0) {
            // ambient
            lighting += lightIntensity;
          } else {
            if (lightType == 1) {
              // point
              L_x = lightPosition_x - hitPoint_x;
              L_y = lightPosition_y - hitPoint_y;
              L_z = lightPosition_z - hitPoint_z;
            } else {
              // directional
              L_x = lightPosition_x;
              L_y = lightPosition_y;
              L_z = lightPosition_z;
            }

            // shadow
            let shadow_ray_o_x = hitPoint_x;
            let shadow_ray_o_y = hitPoint_y;
            let shadow_ray_o_z = hitPoint_z;
            let shadow_ray_d_x = L_x;
            let shadow_ray_d_y = L_y;
            let shadow_ray_d_z = L_z;

            let shadow_t = this.constants.INFINITY;
            for (let i = 0; i < this.constants.SPHERESCOUNT; i++) {
              let current_sphere_center_x = spheres[i][0];
              let current_sphere_center_y = spheres[i][1];
              let current_sphere_center_z = spheres[i][2];
              let current_sphere_radius = spheres[i][6];

              let ts = intersectRaySphere(
                current_sphere_center_x,
                current_sphere_center_y,
                current_sphere_center_z,
                current_sphere_radius,
                shadow_ray_o_x,
                shadow_ray_o_y,
                shadow_ray_o_z,
                shadow_ray_d_x,
                shadow_ray_d_y,
                shadow_ray_d_z
              );

              if (ts[0] < closest_t && t_min <= ts[0] && ts[0] <= t_max) {
                shadow_t = ts[0];
              }
              if (ts[1] < closest_t && t_min <= ts[1] && ts[1] <= t_max) {
                shadow_t = ts[1];
              }
            }
            if (shadow_t != this.constants.INFINITY) {
              continue;
            }

            // diffuse
            let N_dot_L = dot(
              hitNormal_ux,
              hitNormal_uy,
              hitNormal_uz,
              L_x,
              L_y,
              L_z
            );
            if (N_dot_L > 0) {
              let length_N = Math.sqrt(
                hitPoint_x * hitPoint_x +
                  hitPoint_y * hitPoint_y +
                  hitPoint_z * hitPoint_z
              );
              let length_L = Math.sqrt(L_x * L_x + L_y * L_y + L_z * L_z);
              lighting += (lightIntensity * N_dot_L) / (length_N * length_L);
            }

            // Specular
            if (closest_sphere_shine != -1) {
              let R_x = 2 * hitNormal_ux * N_dot_L - L_x;
              let R_y = 2 * hitNormal_uy * N_dot_L - L_y;
              let R_z = 2 * hitNormal_uz * N_dot_L - L_z;
              let V_x = -1 * ray_d_x;
              let V_y = -1 * ray_d_y;
              let V_z = -1 * ray_d_z;
              let R_dot_V = dot(R_x, R_y, R_z, V_x, V_y, V_z);
              let length_R = Math.sqrt(R_x * R_x + R_y * R_y + R_z * R_z);
              let length_V = Math.sqrt(V_x * V_x + V_y * V_y + V_z * V_z);

              if (R_dot_V > 0) {
                lighting +=
                  lightIntensity *
                  Math.pow(
                    R_dot_V / (length_R * length_V),
                    closest_sphere_shine
                  );
              }
            }
          }
        }
        //#endregion

        reflect_color_r =
          closest_sphere_color_r * lighting * (1 - closest_sphere_reflect);
        reflect_color_g =
          closest_sphere_color_g * lighting * (1 - closest_sphere_reflect);
        reflect_color_b =
          closest_sphere_color_b * lighting * (1 - closest_sphere_reflect);
      }
    }
  }

  final_color_r =
    (1 - reflect_sphere_first_r) * temp_color_r +
    reflect_color_r * reflect_sphere_first_r;
  final_color_g =
    (1 - reflect_sphere_first_r) * temp_color_g +
    reflect_color_g * reflect_sphere_first_r;
  final_color_b =
    (1 - reflect_sphere_first_r) * temp_color_b +
    reflect_color_b * reflect_sphere_first_r;

  this.color(final_color_r, final_color_g, final_color_b, 1);
}, settings);

export default class Renderer extends Component {
  state = {
    lights: lights,
    spheres: spheres,
  };

  first = true;
  componentDidMount() {
    if (this.first) {
      this.first = false;
      return;
    }

    const { lights, spheres } = this.state;
    const canvas = render.canvas;
    render(imageWidth, imageHeight, camera, lights, spheres);
    document.getElementById("render").appendChild(canvas);

    //update
    this.updateObject = PubSub.subscribe(UPDATE_OBJECT, (msg, data) => {
      let i;
      if (data.name === "leftSphere") {
        i = 0;
      }
      if (data.name === "centerSphere") {
        i = 1;
      }
      if (data.name === "rightSphere") {
        i = 2;
      }

      let ary = [...spheres[i]];
      for (let i = 0; i < ary.length; i++) {
        if (ary[i] != data.sphere[i]) {
          ary[i] = data.sphere[i];
        }
      }

      spheres[i] = ary;
      render(imageWidth, imageHeight, camera, lights, spheres);
    });
  }

  componentWillUnmount() {
    PubSub.unsubscribe(this.updateObject);
  }

  render() {
    return (
      <div className="display">
        <div id="render"></div>
      </div>
    );
  }
}
