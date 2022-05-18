import { Vector3 } from "../modules/vec3";

const ambient = 0;
const ambientIntensity = 0.65;

const point = 1;
const pointIntensity = 0.5;
const pointPosition = new Vector3(1, 1, 0);

const directional = 2;
const directionalIntensity = 0.2;
const directionalLookAt = new Vector3(1, 4, 4);

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

export default lights;
