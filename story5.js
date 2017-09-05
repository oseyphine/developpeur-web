function Personne(nom, life, atk, def){
	this.nom = nom;
	this.life = life;
	this.atk = atk;
	this.def = def;
};

var hero = new Personne('Hero', 200, 15, 0);
var minion = new Personne('Minion', 10, 10);
var lieutenant = new Personne('Lieutenant minion', 30, 30);
var chef = new Personne('Chef minion', 100, 100);

//STORY 1 : BONUS DE VIE
function bonusLife(moreLife, personnage){
	personnage.life += moreLife;
}

// STORY 2 : BONUS ARMURE
function bonusArmure(armure, personnage){
	personnage.def += armure;
}

// STORY 4 : BONUS ARMURE + ATTAQUE LIEUTENANT
function attaque(attaquant, defenseur){
	console.log("La vie de " + defenseur.nom + " est de : " + defenseur.life);
 	console.log("L'armure de " + defenseur.nom + " est de : " + defenseur.def);

	if(defenseur.def > 0 && defenseur.def >= attaquant.atk){
		defenseur.def = defenseur.def - attaquant.atk;		
	} else if(defenseur.def > 0 && defenseur.def < attaquant.atk){
		defenseur.life -= (attaquant.atk - defenseur.def);
		defenseur.def = 0;
	} else {
		defenseur.life -= attaquant.atk;
	}

	console.log("La vie de " + defenseur.nom + " est de : " + defenseur.life);
 	console.log("L'armure de " + defenseur.nom + " est de : " + defenseur.def);
}

// STORY 5 : BIG BOSS !
function chanceA(chance){
	var randomArmure = Math.floor(Math.random()*chance);
	console.log("randomArmure : " + randomArmure);

		console.log("L'armure de " + hero.nom + " est de : " + hero.def);
	if(randomArmure == (chance-1)){
		bonusArmure(20, hero);
		console.log("Le " + hero.nom + " a bénéficié du bonusArmure et son armure est de : " + hero.def);
	}
}

function chanceV(chance){
	var randomVie = Math.floor(Math.random()*chance);
	console.log("randomVie : " + randomVie);

	if(randomVie == (chance-1)){
		bonusLife(50, hero);
		console.log("Le " + hero.nom + " a bénéficié de bonusLife et sa vie est de : " + hero.life);
	}
}

// LANCEMENT DES 5 TOURS DE COMBAT
for (var i=1; i<6; i++){
	console.log("NOMBRE DE TOUR: " + i);
	chanceA(3);
	chanceV(5);
	attaque(hero, chef);
	attaque(chef, hero);
}
