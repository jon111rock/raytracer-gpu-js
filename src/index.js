import { GPU } from "./modules/gpu";
import { Vector3 } from "./modules/vec3";

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

function intersectRaySphere(
  cx,
  cy,
  cz,
  radius,
  ro_x,
  ro_y,
  ro_z,
  rd_dot_rd,
  oc_dot_rd,
  oc_dot_oc
) {
  let oc = [ro_x - cx, ro_y - cy, ro_z - cz];
  let a = rd_dot_rd;
  let b = 2 * oc_dot_rd;
  let c = oc_dot_oc - radius * radius;
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

let kernelFunctions = [
  unitVectorX,
  unitVectorY,
  unitVectorZ,
  dot,
  intersectRaySphere,
];
kernelFunctions.forEach((f) => gpu.addFunction(f));

/**********
 * Image *
 **********/
const aspectRatio = 16 / 9;
const imageWidth = 1024,
  imageHeight = parseInt(imageWidth / aspectRatio);

/***********
 * Camera *
 ***********/
const viewPortHeight = 2;
const viewPortWidth = aspectRatio * viewPortHeight;
const focalLength = 1;

const origin = new Vector3(0, 0, 0);
const horizontal = new Vector3(viewPortWidth, 0, 0);
const vertical = new Vector3(0, viewPortHeight, 0);
const lowerLeftCorner = origin
  .sub(horizontal.divideScalar(2))
  .sub(vertical.divideScalar(2))
  .sub(new Vector3(0, 0, focalLength));

/*********
 * Light *
 *********/
const ambient = 0;
const ambientIntensity = 0.65;

const point = 1;
const pointIntensity = 0.5;
const pointPosition = new Vector3(1, 1, 0);

const directional = 2;
const directionalIntensity = 0.2;
const directionalLookAt = new Vector3(1, 4, 4);

/**********
 * Sphere *
 **********/

const sphereCenter = new Vector3(0, 0, -1);
const sphereColor = new Vector3(0.1, 0.4, 0.2);
const sphereRadius = 0.5;
const sphereShine = 65;

const sphereCenter2 = new Vector3(0, 0, -1);
const sphereColor2 = new Vector3(0.1, 0.4, 0.2);
const sphereRadius2 = 0.5;
const sphereShine2 = 65;

/************
 * to array *
 ************/
// 0 1
// imageWidth imageHeight
const image = [imageWidth, imageHeight];

// 0 1 2 3
// origin horizontal vertical lowerLeftCorner
const camera = [
  origin.toArray(),
  horizontal.toArray(),
  vertical.toArray(),
  lowerLeftCorner.toArray(),
];

// [type, intensity, p_x, p_y, p_z]
const lights = [
  [ambient, ambientIntensity, -1, -1, -1],
  [
    point,
    pointIntensity,
    pointPosition.toArray()[0],
    pointPosition.toArray()[1],
    pointPosition.toArray()[2],
  ],
  [
    directional,
    directionalIntensity,
    directionalLookAt.toArray()[0],
    directionalLookAt.toArray()[1],
    directionalLookAt.toArray()[2],
  ],
];
// 0
// 0 1 2 3 4 5 6 7
// center_x, center_y, center_z, color_r, color_g, color_b, radius, shine
const spheres = [
  [
    sphereCenter.toArray()[0],
    sphereCenter.toArray()[1],
    sphereCenter.toArray()[2],
    sphereColor.toArray()[0],
    sphereColor.toArray()[1],
    sphereColor.toArray()[2],
    sphereRadius,
    sphereShine,
  ],
  [
    sphereCenter2.toArray()[0],
    sphereCenter2.toArray()[1],
    sphereCenter2.toArray()[2],
    sphereColor2.toArray()[0],
    sphereColor2.toArray()[1],
    sphereColor2.toArray()[2],
    sphereRadius2,
    sphereShine2,
  ],
];
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
  let ro_x = camera[0][0];
  let ro_y = camera[0][1];
  let ro_z = camera[0][2];

  let rd_x = lowerLeftCorner_x + u * horizontal_x + v * vertical_x - ro_x;
  let rd_y = lowerLeftCorner_y + u * horizontal_y + v * vertical_y - ro_y;
  let rd_z = lowerLeftCorner_z + u * horizontal_z + v * vertical_z - ro_z;

  let rd_ux = unitVectorX(rd_x, rd_y, rd_z);
  let rd_uy = unitVectorX(rd_x, rd_y, rd_z);
  let rd_uz = unitVectorX(rd_x, rd_y, rd_z);

  //sphere
  let c_x = 0;
  let c_y = 0;
  let c_z = 0;
  let sc_r = 0;
  let sc_g = 0;
  let sc_b = 0;
  let radius = 0;
  let shine = 0;

  // let closest_t = this.constants.INFINITY;
  // find closest_sphere
  for (let i = 0; i < this.constants.SPHERESCOUNT; i++) {
    // closest_sphere
    c_x = spheres[i][0];
    c_y = spheres[i][1];
    c_z = spheres[i][2];
    sc_r = spheres[i][3];
    sc_g = spheres[i][4];
    sc_b = spheres[i][5];
    radius = spheres[i][6];
    shine = spheres[i][7];
  }

  let oc_x = ro_x - c_x;
  let oc_y = ro_y - c_y;
  let oc_z = ro_z - c_z;

  let rd_dot_rd = dot(rd_x, rd_y, rd_z, rd_x, rd_y, rd_z);
  let oc_dot_rd = dot(oc_x, oc_y, oc_z, rd_x, rd_y, rd_z);
  let oc_dot_oc = dot(oc_x, oc_y, oc_z, oc_x, oc_y, oc_z);
  let closest_t = intersectRaySphere(
    c_x,
    c_y,
    c_z,
    radius,
    ro_x,
    ro_y,
    ro_z,
    rd_dot_rd,
    oc_dot_rd,
    oc_dot_oc
  )[0];

  //#region compute lighting
  let lighting = 0;
  let hitPoint_x = ro_x + closest_t * rd_x;
  let hitPoint_y = ro_y + closest_t * rd_y;
  let hitPoint_z = ro_z + closest_t * rd_z;

  let hitNormal_x = hitPoint_x - c_x;
  let hitNormal_y = hitPoint_y - c_y;
  let hitNormal_z = hitPoint_z - c_z;
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
      if (shine != -1) {
        let R_x = 2 * hitNormal_ux * N_dot_L - L_x;
        let R_y = 2 * hitNormal_uy * N_dot_L - L_y;
        let R_z = 2 * hitNormal_uz * N_dot_L - L_z;
        let V_x = -1 * rd_x;
        let V_y = -1 * rd_y;
        let V_z = -1 * rd_z;
        let R_dot_V = dot(R_x, R_y, R_z, V_x, V_y, V_z);
        let length_R = Math.sqrt(R_x * R_x + R_y * R_y + R_z * R_z);
        let length_V = Math.sqrt(V_x * V_x + V_y * V_y + V_z * V_z);

        if (R_dot_V > 0) {
          lighting +=
            lightIntensity * Math.pow(R_dot_V / (length_R * length_V), shine);
        }
      }
    }
  }
  //#endregion

  // backgroundColor
  let t = 0.5 * (rd_uy + 1.0);
  let backgroundColor = [
    (1 - t) * 1 + t * 0.5,
    (1 - t) * 1 + t * 0.7,
    (1 - t) * 1 + t * 1,
  ];

  if (closest_t != this.constants.INFINITY) {
    this.color(sc_r * lighting, sc_g * lighting, sc_b * lighting, 1);
  } else {
    this.color(backgroundColor[0], backgroundColor[1], backgroundColor[2], 1);
  }
}, settings);

/**********
 * Render *
 **********/
// console.log(render(imageWidth, imageHeight, camera, lights));
render(imageWidth, imageHeight, camera, lights, spheres);
const canvas = render.canvas;
document.body.appendChild(canvas);
