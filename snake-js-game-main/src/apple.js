class Apple {
    constructor(x, y, size) {
      this.x = x;
      this.y = y;
      this.size = size;
    }
  
    //Première apparition pomme
    appear(apple) {
      apple.fillStyle = 'rgb(255, 103, 103)';
      apple.fillRect(this.x, this.y, this.size, this.size);
    }
  }
  
  //génère une position X aléatoire et qui n'est pas une case occupée par le serpent
  function RandomPositionX(segments) {
    const valeursPossibles = [0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750];
    
    let indexAleatoireX;

    do {
        indexAleatoireX = Math.floor(Math.random() * valeursPossibles.length);
    } while (segments.some(segment => segment.x === valeursPossibles[indexAleatoireX]));

    return valeursPossibles[indexAleatoireX];
  }
  
  //génère une position Y aléatoire et qui n'est pas une case occupée par le serpent
  function RandomPositionY(segments) {
    const valeursPossibles = [0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750];
    
    let indexAleatoireY;

    do {
        indexAleatoireY = Math.floor(Math.random() * valeursPossibles.length);
    } while (segments.some(segment => segment.y === valeursPossibles[indexAleatoireY]));

    return valeursPossibles[indexAleatoireY];
  }
  
  export { Apple, RandomPositionX, RandomPositionY };
  