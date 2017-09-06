var minion = new Ennemies('Minion', 10, 10);
var lieutenant = new Ennemies('Lieutenant minion', 30, 30);
var chef = new Ennemies('Chef minion', 100, 100);

function Ennemies(nom, life, atk, def){
	this.nom = nom;
	this.life = life;
	this.atk = atk;

	this.attack = function(heros){
		heros.sufferedAttack(this);
	};

	this.sufferedAttack = function(heros){
		console.log("La VIE de " + this.nom + " AVANT l'attaque de " + heros.nom + " est de : " + this.life);
		this.life -= heros.atk;
		console.log("La VIE de " + this.nom + " APRES l'attaque de " + heros.nom + " est de : " + this.life);
	};
};