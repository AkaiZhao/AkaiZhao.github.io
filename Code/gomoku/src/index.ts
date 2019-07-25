
import DrawMap from './drawMap';
import Chess from './chess';
let canvas = <HTMLCanvasElement>document.getElementById('canvas');
let context = <CanvasRenderingContext2D>canvas.getContext('2d');
let drawMap = new DrawMap(canvas, context);
let chess = new Chess(canvas, context);

canvas.addEventListener('click', e => {
  chess.play({ e, offset: canvas.getBoundingClientRect() });
});

window.addEventListener('keyup', e => {
  drawMap.inital();
  chess.refresh();
});
function refresh(e: MouseEvent): void {
  drawMap.inital();
  chess.refresh();
  chess.hover({ e, offset: canvas.getBoundingClientRect() });
}
canvas.addEventListener('mousemove', e => {
  refresh(e);
});
