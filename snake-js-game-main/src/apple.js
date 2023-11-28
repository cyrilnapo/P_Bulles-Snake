class Apple {
    constructor(x, y, size) {
      this.x = x;
      this.y = y;
      this.size = size;
    }
  
    appear(apple) {
      apple.fillStyle = 'rgb(255, 103, 103)';
      apple.fillRect(this.x, this.y, this.size, this.size);
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
  
  export { Apple, RandomPositionX, RandomPositionY };
  