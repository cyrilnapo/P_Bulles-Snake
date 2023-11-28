import {apple} from './main.js' 
import { RandomPositionX, RandomPositionY } from './apple.js';

class Snake {
    constructor(x, y, size) {
      this.x = x;
      this.y = y;
      this.size = size;
      this.segments = [{ x, y }];
      this.score = 0;
      
    }
  
    draw(snake) {
      snake.fillStyle = 'rgb(30, 110, 124)';
      for (let segment of this.segments) {
        snake.fillRect(segment.x, segment.y, this.size, this.size);
      }
    }
  
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
  
    verifyLimits() {
      const head = this.segments[0];
      if (head.x >= 800 || head.y >= 800 || head.y <= -50 || head.x <= -50) {
        alert("GAME OVER ! Votre score est de " + score + " !");
        exit;
      }
    }
  
    eat() {
      const head = this.segments[0];
  
      if (head.x < apple.x + apple.size && head.x + this.size > apple.x && head.y < apple.y + apple.size && head.y + this.size > apple.y) {
        apple.x = RandomPositionX();
        apple.y = RandomPositionY();
        score++;
        return true;
      }
      return false;
    }
  }
  
  export { Snake };
  