function Personne(nom, life, atk, def){
	this.nom = nom;
	this.life = life;
	this.atk = atk;
	this.def = def;
	this.bonusLife = function(moreLife){
	console.log("La vie de " + this.nom + " est de : " + this.life);
	this.life += moreLife;
	console.log("La vie de " + this.nom + " est de : " + this.life);
	}
};

var hero = new Personne('Hero', 200, 15, 0);
var minion = new Personne('Minion', 10, 10);
var lieutenant = new Personne('Lieutenant minion', 30, 30);
var chef = new Personne('Chef minion', 100, 100);

hero.bonusLife(50);