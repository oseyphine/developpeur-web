/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_character_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_heros_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_minions_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__js_dom_js__ = __webpack_require__(4);





/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Character {
	constructor(name, life, atk) {
		this.name = name;
		this.life = life;
		this.atk = atk;
	};

	attack(enemy){
		// Explication de la logique/pratique
		// ATTENTION ICI LE PARAMETRE 'enemy' a pour but de contenir un objet
		// Pour pouvoir modeler facilement et agrémenter les différents >> console.log <<, la narration 
		// Il serait plus logique de mettre 'enemy.atk' en paramètre
		// Du coup à adapter PARTOUT si changement
		enemy.sufferedAttack(this);
	};

	sufferedAttack(enemy){
		console.log("La VIE de " + this.name + " AVANT l'attaque de " + enemy.name + " est de : " + this.life);
		this.life -= enemy.atk;
		this.gameOver;
		console.log("La VIE de " + this.name + " APRES l'attaque de " + enemy.name + " est de : " + this.life);
	};

	get gameOver() {
		return this.life;
	};

	set gameOver(value) {
		if(value > 0) {
			this.life = value;
		} else {
			this.life = 0;
			alert("Game Over pour " + this.name);
		}
	};

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Character;
;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__character_js__ = __webpack_require__(1);


class Heros extends __WEBPACK_IMPORTED_MODULE_0__character_js__["a" /* Character */]{
	constructor(name, life, atk, def){
		super(name, life, atk);
		this.def = def;
	};

	// Methodes
	bonusLife(nbrBonusLife){
		console.log("La VIE de " + this.name + " AVANT le bonusLife est de : " + this.life);
		this.life += nbrBonusLife;
		console.log("La VIE de " + this.name + " APRES le bonusLife est de : " + this.life);
	};

	bonusArmor(nbrBonusArmure){
		console.log("L'ARMURE de " + this.name + " AVANT le bonusArmure est de : " + this.def);
		this.def += nbrBonusArmure;
		console.log("L'ARMURE de " + this.name + " APRES le bonusArmure est de : " + this.def);	
	};

	sufferedAttack(ennemies){
		console.log("La VIE de " + this.name + " AVANT l'attaque de " + ennemies.name + " est de : " + this.life);
 	 	console.log("L'ARMURE de " + this.name + " AVANT l'attaque de " + ennemies.name + " est de : " + this.def);

		if(this.def > 0 && this.def >= ennemies.atk){
			this.def -= ennemies.atk;		
		} else if(this.def > 0 && this.def < ennemies.atk){
			this.life -= (ennemies.atk - this.def);
			this.def = 0;
		} else {
			this.life -= ennemies.atk;
		};

		this.gameOver;

		console.log("La VIE de " + this.name + " APRES l'attaque de " + ennemies.name + " est de : " + this.life);
 	 	console.log("L'ARMURE de " + this.name + " APRES l'attaque de " + ennemies.name + " est de : " + this.def);
	};

	chanceArmor(chanceArmor){
		var randomArmor = Math.floor(Math.random()*chanceArmor);
		//console.log("NAN : " + chanceArmure);
		//console.log("randomArmure : " + randomArmure);

		console.log("L'ARMURE de " + this.name + " est de : " + this.def);
		if(randomArmor == (chanceArmor-1)){
			console.log(this.name + " a bénéficié du bonusArmure.");
			this.bonusArmor(20);
			console.log("Son ARMURE est maintenant de : " + this.def);
		} else {
			console.log("Pas de bonusArmure pour " + this.name + ". Sa défense (ARMURE) reste à " + this.def);
		}
	};

	chanceLife(chanceLife){
		var randomLife = Math.floor(Math.random()*chanceLife);
		//console.log("randomLife : " + randomLife);

		console.log(this.name + " a une VIE de : " + this.life);
		if(randomLife == (chanceLife-1)){
			console.log(this.name + " a bénéficié de bonusLife et sa VIE est de : " + this.life);
			this.bonusLife(50);
			console.log("Sa VIE est maintenant de : " + this.life);
		} else {
			console.log("Pas de bonusLife pour " + this.name + ". Sa VIE reste à " + this.life);			
		}
	};
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Heros;
;

// var hero = new Heros('Hero', 200, 15, 0);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__character_js__ = __webpack_require__(1);


class Minions extends __WEBPACK_IMPORTED_MODULE_0__character_js__["a" /* Character */] {
	constructor(name, life, atk/*, avatar*/) {
	super(name, life, atk);
	//this.avatar = avatar;
	};
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Minions;
;

// let avatarMinion = "http://www.imagenspng.com.br/wp-content/uploads/2015/07/minions-04-violao.png";
// let avatarLieutenant = "https://i.pinimg.com/originals/15/fa/55/15fa55058b467a39be34e49e097e5751.jpg";
// let avatarChef = "http://data.whicdn.com/images/105976966/large.jpg";

// var minion = new Minions('Minion', 10, 10, avatarMinion);
// var lieutenant = new Minions('Lieutenant minion', 30, 30, avatarLieutenant);
// var chef = new Minions('Chef minion', 100, 100, avatarChef);

// console.log(minion.avatar);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__character_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__heros_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__minions_js__ = __webpack_require__(3);





// $(document).ready(function(){

	// let avatarMinion = "http://www.imagenspng.com.br/wp-content/uploads/2015/07/minions-04-violao.png";
	// let avatarLieutenant = "https://i.pinimg.com/originals/15/fa/55/15fa55058b467a39be34e49e097e5751.jpg";
	// let avatarChef = "http://data.whicdn.com/images/105976966/large.jpg";

	var minion = new __WEBPACK_IMPORTED_MODULE_2__minions_js__["a" /* Minions */]('Minion', 10, 10);
	var lieutenant = new __WEBPACK_IMPORTED_MODULE_2__minions_js__["a" /* Minions */]('Lieutenant minion', 30, 30);
	var chef = new __WEBPACK_IMPORTED_MODULE_2__minions_js__["a" /* Minions */]('Chef minion', 100, 100);

	var hero = new __WEBPACK_IMPORTED_MODULE_1__heros_js__["a" /* Heros */]('Hero', 200, 15, 0);

	var minion = new __WEBPACK_IMPORTED_MODULE_2__minions_js__["a" /* Minions */]('Minion', 10, 10);
	var lieutenant = new __WEBPACK_IMPORTED_MODULE_2__minions_js__["a" /* Minions */]('Lieutenant minion', 30, 30);
	var chef = new __WEBPACK_IMPORTED_MODULE_2__minions_js__["a" /* Minions */]('Chef minion', 100, 100);

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

/***/ })
/******/ ]);