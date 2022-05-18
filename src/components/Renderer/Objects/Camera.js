import { Vector3, normalize, cross } from "../modules/vec3";

function degreesToRadians(degrees) {
  var pi = Math.PI;
  return degrees * (pi / 180);
}

function createCamera(lookfrom, lookat, vup, vfov) {
  const aspectRatio = 16 / 9;

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

let lookfrom = new Vector3(1, 0.5, 4);
let lookat = new Vector3(0.5, 0, -1);
let vup = new Vector3(0, 1, 0);
let vfov = 36;

let defaultSetting = {
  lookfrom: lookfrom.toArray(),
  lookat: lookat.toArray(),
  vup: vup.toArray(),
  vfov: vfov,
};
let defaultCamera = createCamera(lookfrom, lookat, vup, vfov);

export { defaultSetting, defaultCamera, degreesToRadians, createCamera };
