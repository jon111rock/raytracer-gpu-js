import { GPU } from "./modules/gpu";

let gpu = new GPU();

const width = 512,
  height = 512;

//kernel
const settings = {
  output: [width, height],
  graphical: true,
};
const render = gpu.createKernel(function (w, h) {
  let tx = this.thread.x / w;
  let ty = this.thread.y / h;

  this.color(tx, ty, 0.25, 1);
}, settings);

render(width, height);

const canvas = render.canvas;
document.body.appendChild(canvas);
