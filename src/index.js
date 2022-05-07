import { GPU } from "./modules/gpu";
import { Vector3 } from "./modules/vec3";
import { Ray } from "./modules/ray";

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

function rayColor(rd_ux, rd_uy, rd_uz) {
  let t = 0.5 * (rd_uy + 1.0);
  let color = [
    (1 - t) * 1 + t * 0.5,
    (1 - t) * 1 + t * 0.7,
    (1 - t) * 1 + t * 1,
  ];

  return color;
}

let kernelFunctions = [unitVectorX, unitVectorY, unitVectorZ, rayColor];
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

/***********
 * Kernael *
 ***********/
const settings = {
  output: [imageWidth, imageHeight],
  graphical: true,
};
const render = gpu.createKernel(function (w, h, camera) {
  let v = this.thread.x / w;
  let u = this.thread.y / h;
  //ray
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
  ``;
  let ro_y = camera[0][1];
  let ro_z = camera[0][2];

  let rd_x = lowerLeftCorner_x + u * horizontal_x + v * vertical_x - ro_x;
  let rd_y = lowerLeftCorner_y + u * horizontal_y + v * vertical_y - ro_y;
  let rd_z = lowerLeftCorner_z + u * horizontal_z + v * vertical_z - ro_z;

  let rd_ux = unitVectorX(rd_x, rd_y, rd_z);
  let rd_uy = unitVectorX(rd_x, rd_y, rd_z);
  let rd_uz = unitVectorX(rd_x, rd_y, rd_z);
  let pixelColor = rayColor(rd_ux, rd_uy, rd_uz);

  this.color(pixelColor[0], pixelColor[1], pixelColor[2], 1);
}, settings);

/**********
 * Render *
 **********/
render(imageWidth, imageHeight, camera);
const canvas = render.canvas;
document.body.appendChild(canvas);
