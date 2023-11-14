class Snake {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }

  draw(snake) {
    snake.fillStyle = 'green';
    snake.fillRect(this.x, this.y, this.size, this.size);
  }

  move(direction) {
    if (direction == 0) {
      this.y -= 8;
    } else if (direction == 1) {
      this.y += 8;
    } else if (direction == 2) {
      this.x -= 8;
    } else if (direction == 3) {
      this.x += 8;
    }
  }

  verifyLimits() {
    if (this.x >= 800) {
      this.x = 0;
    } else if (this.y >= 800) {
      this.y = 0;
    } else if (this.y < 0) {
      this.y = 795;
    } else if (this.x < 0) {
      this.x = 795;
    }
  }
}

class Apple {
  constructor(x, y, size) {

    this.x = x;
    this.y = y;
    this.size = size;
  }

  appear(terrain) {

    terrain.fillStyle = 'red';
    terrain.fillRect(this.x, this.y, this.size, this.size);
  }

}
const canvas = document.querySelector('canvas');
const terrain = canvas.getContext('2d');
const snake = new Snake(375, 375, 50);
const apple = new Apple(Math.random() * 750, Math.random() * 750, 50);
let direction = 0;
let score = 0;



const move = () => {
  // Dessine le terrain de jeu
  terrain.fillStyle = 'lightgreen';
  terrain.fillRect(0, 0, 800, 800);

  snake.draw(terrain);
  apple.appear(terrain);
  // Gère les mouvements et les collisions
  snake.move(direction);
  snake.verifyLimits();

  if (snake.x < apple.x + apple.size && snake.x + snake.size > apple.x && snake.y < apple.y + apple.size && snake.y + snake.size > apple.y) {
    // Le serpent a touché la pomme, change la position de la pomme
    apple.x = Math.random() * 750;
    apple.y = Math.random() * 750;
    score++;
  }


  requestAnimationFrame(move);

};


document.onkeydown = (e) => {
  if (e.keyCode === 38 && direction != 1) {
    // haut
    direction = 0;
  } else if (e.keyCode === 40 && direction != 0) {
    // bas
    direction = 1;
  } else if (e.keyCode === 37 && direction != 3) {
    // gauche
    direction = 2;
  } else if (e.keyCode === 39 && direction != 2) {
    // droite
    direction = 3;
  }
};


requestAnimationFrame(move);
