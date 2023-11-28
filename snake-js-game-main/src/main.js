import { Snake } from './snake.js';
import { Apple, RandomPositionX, RandomPositionY } from './apple.js';

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const snake = new Snake(350, 350, 50);
export const apple = new Apple(RandomPositionX(), RandomPositionY(), 50);

let direction = 0;
let score = 0;
const scoreElement = document.getElementById('score');

const move = () => {
  
  ctx.fillStyle = 'lightblue';
  ctx.fillRect(0, 0, 800, 800);

  snake.verifyLimits();
  snake.draw(ctx);
  apple.appear(ctx);

  snake.move(direction);

  scoreElement.textContent = score;

  setTimeout(() => {
    requestAnimationFrame(move);
  }, 100);
};

document.onkeydown = (e) => {
  if (e.keyCode === 38 && direction !== 1) {
    direction = 0;
  } else if (e.keyCode === 40 && direction !== 0) {
    direction = 1;
  } else if (e.keyCode === 37 && direction !== 3) {
    direction = 2;
  } else if (e.keyCode === 39 && direction !== 2) {
    direction = 3;
  }
};



requestAnimationFrame(move);
