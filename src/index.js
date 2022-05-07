import { GPU } from "./modules/gpu";

let gpu = new GPU();

const render = gpu.createKernel(
  function () {
    let tx = this.thread.x / 512;
    let ty = this.thread.y / 512;

    this.color(tx, ty, 0.25, 1);
  },
  {
    output: [512, 512],
    graphical: true,
  }
);

render();

const canvas = render.canvas;
document.body.appendChild(canvas);
