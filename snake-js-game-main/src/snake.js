/**
 * ETML
 * Auteur : Cyril Napoleone
 * Date : 09.01.2024
 * Description : Fichier de la classe concernant le serpent du réplica. Reliée via les imports/exports au main
 */

import {apple, ctx} from './main.js';
import { RandomPositionX, RandomPositionY } from './apple.js';


let score = 0; //score

class Snake {
    constructor(x, y, size) {
      this.size = size;
      this.segments = [{ x, y }];      
    }
  
    /**
     * Afficher l'entièreté du serpent
     * @param {*} snake l'objet représentant le serpent à afficher
     */
    draw(snake) {
      snake.fillStyle = 'rgb(30, 110, 124)';

      //affiche le serpent segment par segment
      for (let segment of this.segments) {
        snake.fillRect(segment.x, segment.y, this.size, this.size);
      }
    }
  
    /**
     * Gère les mouvements du serpent suivant la variable de direction
     * @param {*} direction Designe la direction dans laquelle le serpent doit aller (haut,bas,gauche,droite)
     */
    move(direction) {
      const distance = 50;

      const head = { ...this.segments[0] };
      if (direction == 0) {
        head.y -= distance;

      } else if (direction == 1) {
        head.y += distance;

      } else if (direction == 2) {
        head.x -= distance;

      } else if (direction == 3) {
        head.x += distance;

      }
      //ajoute une segment au débu du serpent
      this.segments.unshift(head);
  
      //si aucune pomme n'est mangée, alors enlève le dernier segment du serpent
      if (!this.eat()) {
        this.segments.pop();
      }
    }
  
    /**
     * Vérifie si le serpent est en collision avec les bordures ou lui même
     */
    verifyLimits() {
      const head = this.segments[0];
      //Vérifie si la position de la tête du serpent est égal aux limite de bordures
      if (head.x >= 800 || head.y >= 800 || head.y <= -50 || head.x <= -50) {
        this.gameOver();
      }

      //vérifie si un la position de la tête du serpent est égal à la position d'un de ses segments
      for (let i = 1; i < this.segments.length; i++) {
        if ( head.x === this.segments[i].x && head.y === this.segments[i].y ) {
          this.gameOver();
        }
      }
    }
    
    /**
     * Gère la collision entre le serpent et un pomme
     * @returns vrai si une pomme est mangée, si pas de pomme mangée alors faux
     */
    eat() {
      const head = this.segments[0];
  
      //Vérifie si la position de la tête est égal à la position de la pomme et la fait réapparaitre aléatoirement si oui
      if (head.x < apple.x + apple.size && head.x + this.size > apple.x && head.y < apple.y + apple.size && head.y + this.size > apple.y) {
        apple.x = RandomPositionX(this.segments);
        apple.y = RandomPositionY(this.segments);
        score++;
        return true;
      }
      return false;
    }

    /**
     * Message de fin de jeu
     */
    gameOver(){
      alert("Game over ! votre score est de " + score)
      location.reload(); //refresh la page
    }
  }
  
  export { Snake };
  export {score} ;

  