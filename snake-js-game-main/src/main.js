/**
 * ETML
 * Auteur : Cyril Napoleone
 * Date : 09.01.2024
 * Description : Fichier principal du réplica d'un jeu Snake en javascript
 */

import { Snake } from './snake.js';
import { Apple, RandomPositionX, RandomPositionY } from './apple.js';
import {score} from './snake.js'

//Terrain
const canvas = document.querySelector('canvas'); 
export const ctx = canvas.getContext('2d');

const snake = new Snake(350, 350, 50); //création du serpent
export const apple = new Apple(RandomPositionX(snake.segments), RandomPositionY(snake.segments), 50); //création de la pomme

let direction; //variable désignant si le serpent va enhaut, en bas, à gauche ou à droite
const scoreElement = document.getElementById('score'); //permet d'afficher le score dans le html
let movementSecurity = false; //booléen de sécurité pour que il n'y aie pas de bug à cause de changements de directions trop rapides

/**
 * Gère le bon fonctionnement du jeu (mouvements, apparitions, vérifications, score, vitesse)
 * * @param -
 */
const move = () => {
  
  ctx.fillStyle = 'lightblue'; //couleur du terrain
  ctx.fillRect(0, 0, 800, 800); //taille du terrain

  snake.verifyLimits(); //vérifie si le serpent est en collision avec la bordure ou lui même
  snake.draw(ctx); //affiche le serpent
  apple.appear(ctx); //affichage de la pomme

  snake.move(direction); //mouvements du serpent

  scoreElement.textContent = score; //afficher le score

  //latence de mouvements (millisecondes)
  setTimeout(() => {
    requestAnimationFrame(move);
    movementSecurity = false;
  }, 100);
};

/**
 * Change la variable de direction au click d'une flèche
 * @param {*} e bouton touché
 */
document.onkeydown = (e) => {
  //aller en haut
  if (e.keyCode === 38 && direction !== 1 && movementSecurity == false) {
    direction = 0;
    movementSecurity = true;
  }
  //Aller en bas
  else if (e.keyCode === 40 && direction !== 0 && movementSecurity == false) {
    direction = 1;
    movementSecurity = true;

  } 
  //Aller à gauche
  else if (e.keyCode === 37 && direction !== 3 && movementSecurity == false) {
    direction = 2;
    movementSecurity = true;

  } 
  //Aller à droite
  else if (e.keyCode === 39 && direction !== 2 && movementSecurity == false) {
    direction = 3;
    movementSecurity = true;

  }
};

//Mouvements du jeu (appelle move ci-dessus)
requestAnimationFrame(move);