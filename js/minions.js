import { Character } from './character.js'

export class Minions extends Character {
	constructor(name, life, atk/*, avatar*/) {
	super(name, life, atk);
	//this.avatar = avatar;
	};
};

// let avatarMinion = "http://www.imagenspng.com.br/wp-content/uploads/2015/07/minions-04-violao.png";
// let avatarLieutenant = "https://i.pinimg.com/originals/15/fa/55/15fa55058b467a39be34e49e097e5751.jpg";
// let avatarChef = "http://data.whicdn.com/images/105976966/large.jpg";

// var minion = new Minions('Minion', 10, 10, avatarMinion);
// var lieutenant = new Minions('Lieutenant minion', 30, 30, avatarLieutenant);
// var chef = new Minions('Chef minion', 100, 100, avatarChef);

// console.log(minion.avatar);