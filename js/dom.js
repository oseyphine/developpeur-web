import { Character } from './character.js'
import { Heros } from './heros.js'
import { Minions } from './minions.js'


// $(document).ready(function(){

	// let avatarMinion = "http://www.imagenspng.com.br/wp-content/uploads/2015/07/minions-04-violao.png";
	// let avatarLieutenant = "https://i.pinimg.com/originals/15/fa/55/15fa55058b467a39be34e49e097e5751.jpg";
	// let avatarChef = "http://data.whicdn.com/images/105976966/large.jpg";

	var minion = new Minions('Minion', 10, 10);
	var lieutenant = new Minions('Lieutenant minion', 30, 30);
	var chef = new Minions('Chef minion', 100, 100);

	var hero = new Heros('Hero', 200, 15, 0);

	var minion = new Minions('Minion', 10, 10);
	var lieutenant = new Minions('Lieutenant minion', 30, 30);
	var chef = new Minions('Chef minion', 100, 100);

	let btnAttack = document.querySelectorAll('button');
	let lifes = document.querySelectorAll('span');
	// let avatars = document.querySelectorAll('img');
		// console.log(avatars[1].currentSrc);
		// console.log(lieutenant.avatar);
		// console.log(lieutenant.avatar);

	lifes[0].innerHTML = hero.life;
	lifes[1].innerHTML = minion.life;

	// avatars[1].currentSrc = "http://data.whicdn.com/images/105976966/large.jpg";


	btnAttack[0].addEventListener('click', function(){
		hero.attack(minion);
		lifes[1].innerHTML = minion.life;

	});

	btnAttack[1].addEventListener('click', function(){
		minion.attack(hero);
		lifes[0].innerHTML = hero.life;
	});


// });