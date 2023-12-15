import { Snake } from './snake.js';
import { Apple, RandomPositionX, RandomPositionY } from './apple.js';
import {score} from './snake.js'

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const snake = new Snake(350, 350, 50);
export const apple = new Apple(RandomPositionX(snake.segments), RandomPositionY(snake.segments), 50);

let direction;
const scoreElement = document.getElementById('score');
let mouvementSecurity = false;

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
    mouvementSecurity = false;
  }, 100);
};

document.onkeydown = (e) => {
  //aller en haut
  if (e.keyCode === 38 && direction !== 1 && mouvementSecurity == false) {
    direction = 0;
    mouvementSecurity = true;
  }
  //Aller en bas
  else if (e.keyCode === 40 && direction !== 0 && mouvementSecurity == false) {
    direction = 1;
    mouvementSecurity = true;

  } 
  //Aller à gauche
  else if (e.keyCode === 37 && direction !== 3 && mouvementSecurity == false) {
    direction = 2;
    mouvementSecurity = true;

  } 
  //Aller à droite
  else if (e.keyCode === 39 && direction !== 2 && mouvementSecurity == false) {
    direction = 3;
    mouvementSecurity = true;

  }
};

requestAnimationFrame(move);