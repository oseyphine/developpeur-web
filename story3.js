function Personne(nom, life, atk, def){
	this.nom = nom;
	this.life = life;
	this.atk = atk;
	this.def = def;
	this.attaque = function(defenseur){
		console.log("La vie de " + defenseur.nom + " est de : " + defenseur.life);
		defenseur.life  -= this.atk;
		console.log("La vie de " + defenseur.nom + " est de : " + defenseur.life);
	}
};

var hero = new Personne('Hero', 200, 15, 0);
var minion = new Personne('Minion', 10, 10);
var lieutenant = new Personne('Lieutenant Minion', 30, 30);
var chef = new Personne('Chef Minion', 100, 100);

minion.attaque(hero);