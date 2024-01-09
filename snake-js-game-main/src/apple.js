/**
 * ETML
 * Auteur : Cyril Napoleone
 * Date : 09.01.2024
 * Description : Fichier de la classe concernant la pomme du réplica. Reliée via les imports/exports au main
 */

class Apple {
    constructor(x, y, size) {
      this.x = x;
      this.y = y;
      this.size = size;
    }
  
    /**
     * Affiche la première pomme de la partie sur le terrain
     * @param {*} apple l'objet représentant la pomme à afficher
     */
    appear(apple) {
      apple.fillStyle = 'rgb(255, 103, 103)';
      apple.fillRect(this.x, this.y, this.size, this.size);
    }
  }
  
  /**
   * Génère une position X non occupée par le serpent
   * @param {*} segments liste des positions de chaque segments du serpent
   * @returns Une valeur X aléatoire qui n'est pas occupée
   */
  function RandomPositionX(segments) {
    const valeursPossibles = [0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750];
    
    let randomX;

    //pioche une valeure X tant que elle est égale à une position X occupée par le serpent
    do {
        randomX = Math.floor(Math.random() * valeursPossibles.length);
    } while (segments.some(segment => segment.x === valeursPossibles[randomX]));

    return valeursPossibles[randomX];
  }
  
/**
 * Génère une position Y non occupée par le serpent
 * @param {*} segments liste des positions de chaque segments du serpent
 * @returns Une valeure Y aléatoire qui n'est pas occupée
 */
  function RandomPositionY(segments) {
    const valeursPossibles = [0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750];
    
    let randomY;

    //pioche une valeure Y tant que elle est égale à une position Y occupée par le serpent
    do {
        randomY = Math.floor(Math.random() * valeursPossibles.length);
    } while (segments.some(segment => segment.y === valeursPossibles[randomY]));

    return valeursPossibles[randomY];
  }
  
  export { Apple, RandomPositionX, RandomPositionY };
