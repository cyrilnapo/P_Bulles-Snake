import {apple} from './main.js';
import { RandomPositionX, RandomPositionY } from './apple.js';


let score = 0;

class Snake {
    constructor(x, y, size) {
      this.x = x;
      this.y = y;
      this.size = size;
      this.segments = [{ x, y }];      
    }
  
    //affiche le serpent
    draw(snake) {
      snake.fillStyle = 'rgb(30, 110, 124)';
      for (let segment of this.segments) {
        snake.fillRect(segment.x, segment.y, this.size, this.size);
      }
    }
  
    //gère l'avancement du serpent sur le terrain
    move(direction) {
      const head = { ...this.segments[0] };
      if (direction == 0) {
        head.y -= 50;

      } else if (direction == 1) {
        head.y += 50;

      } else if (direction == 2) {
        head.x -= 50;

      } else if (direction == 3) {
        head.x += 50;

      }
      this.segments.unshift(head);
  
      if (!this.eat()) {
        this.segments.pop();
      }
    }
  
    //check si la tête du serpent est en collision avec la bordure ou lui même
    verifyLimits() {
      const head = this.segments[0];
      if (head.x >= 800 || head.y >= 800 || head.y <= -50 || head.x <= -50) {
        this.gameOver();

      }

      for (let i = 1; i < this.segments.length; i++) {
        if ( head.x === this.segments[i].x && head.y === this.segments[i].y ) {
          this.gameOver();
        }
      }
    }
    
    //le serpent mange une pomme
    eat() {
      const head = this.segments[0];
  
      if (head.x < apple.x + apple.size && head.x + this.size > apple.x && head.y < apple.y + apple.size && head.y + this.size > apple.y) {
        apple.x = RandomPositionX(this.segments);
        apple.y = RandomPositionY(this.segments);
        score++;
        return true;
      }
      return false;
    }

    gameOver(){
      alert("Game over")
      exit;
    }
  }
  
  export { Snake };
  export {score} ;
