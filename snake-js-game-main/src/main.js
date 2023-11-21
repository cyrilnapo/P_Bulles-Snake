class Snake {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.segments = [{ x, y }];
  }

  draw(snake) {
    snake.fillStyle = 'green';
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

    this.segments.unshift(head); // Ajoute la nouvelle tête au début du tableau

    if (!this.eat()) {
      this.segments.pop();
    }
  }

  verifyLimits() {
    const head = this.segments[0];
    if (head.x === 800 || head.y === 800 || head.y === 0 || head.x === 0) {
      alert("GAME OVER !");
      exit
    }
  }

  eat() {
    const head = this.segments[0];

    if (head.x < apple.x + apple.size && head.x + this.size > apple.x && head.y < apple.y + apple.size && head.y + this.size > apple.y) {
      // Le serpent a touché la pomme, change la position de la pomme
      apple.x = RandomPositionX();
      apple.y = RandomPositionY();
      score++;
      return true; // Retourne vrai pour indiquer que le serpent a mangé une pomme
    }
    return false;
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

function RandomPositionX() {
  const valeursPossibles = [0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750];
  const indexAleatoireX = Math.floor(Math.random() * valeursPossibles.length);

  return valeursPossibles[indexAleatoireX];
}
function RandomPositionY() {
  const valeursPossibles = [0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750];
  const indexAleatoireY = Math.floor(Math.random() * valeursPossibles.length);
  return valeursPossibles[indexAleatoireY];
}

const canvas = document.querySelector('canvas');
const terrain = canvas.getContext('2d');

const snake = new Snake(350, 350, 50);
const apple = new Apple(RandomPositionX(), RandomPositionY(), 50);

let direction = 0;
let score = 0;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


const move = () => {
  // Dessine le terrain de jeu
  terrain.fillStyle = 'lightgreen';
  terrain.fillRect(0, 0, 800, 800);

  snake.draw(terrain);
  apple.appear(terrain);
  // Gère les mouvements et les collisions
  snake.move(direction);
  snake.verifyLimits();



  sleep(100).then(() => { requestAnimationFrame(move); });


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
