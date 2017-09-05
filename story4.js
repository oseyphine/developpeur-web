function Personne(nom, life, atk, def){
	this.nom = nom;
	this.life = life;
	this.atk = atk;
	this.def = def;
	this.bonusArmure = function (armure){
		console.log("L'armure de " + this.nom + " est de : " + this.def);
		this.def += armure;
		console.log("L'armure de " + this.nom + " est de : " + this.def);
	};
	this.attaque = function (defenseur){
		console.log("La vie de " + defenseur.nom + " est de : " + defenseur.life);
	 	console.log("L'armure de " + defenseur.nom + " est de : " + defenseur.def);

		if(defenseur.def > 0 && defenseur.def >= this.atk){
			defenseur.def = defenseur.def - this.atk;		
		} else if(defenseur.def > 0 && defenseur.def < this.atk){
			defenseur.life -= (this.atk - defenseur.def);
			defenseur.def = 0;
		} else {
			defenseur.life -= this.atk;
		}

		console.log("La vie de " + defenseur.nom + " est de : " + defenseur.life);
	 	console.log("L'armure de " + defenseur.nom + " est de : " + defenseur.def);

	}
};

var hero = new Personne('Hero', 200, 15, 0);
var minion = new Personne('Minion', 10, 10);
var lieutenant = new Personne('Lieutenant minion', 30, 30);
var chef = new Personne('Chef minion', 100, 100);

hero.bonusArmure(20);
lieutenant.attaque(hero);
