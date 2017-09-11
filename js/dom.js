import { Character } from './character.js'
import { Heros } from './heros.js'
import { Minions } from './minions.js'

var minion = new Minions('Minion', 10, 10);
var lieutenant = new Minions('Lieutenant minion', 30, 30);
var chef = new Minions('Chef minion', 100, 100);

var hero = new Heros('Hero', 200, 15, 0);

var minion = new Minions('Minion', 10, 10);
var lieutenant = new Minions('Lieutenant minion', 30, 30);
var chef = new Minions('Chef minion', 100, 100);

let btnAttack = document.querySelectorAll('button');
let lifes = document.querySelectorAll('span');

lifes[0].innerHTML = hero.life;
lifes[1].innerHTML = minion.life;

btnAttack[0].addEventListener('click', function(){
	hero.attack(minion);
	lifes[1].innerHTML = minion.life;

});

btnAttack[1].addEventListener('click', function(){
	minion.attack(hero);
	lifes[0].innerHTML = hero.life;
});