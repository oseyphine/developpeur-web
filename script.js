function Personne(nom, life, atk, def){
	this.nom = nom;
	this.life = life;
	this.atk = atk;
	this.def = def;
};

const armure = 20;

var hero = new Personne('Hero', 200, 15, 0);
var minion = new Personne('Minion', 10, 10);
var lieutenant = new Personne('Lieutenant minion', 30, 30);
var chef = new Personne('Chef minion', 100, 100);

//  //STORY 1 : BONUS DE VIE
// function bonusLife(moreLife, personnage){
// 	console.log("La vie de " + personnage.nom + " est de : " + personnage.life);
// 	personnage.life += moreLife;
// 	console.log("La vie de " + personnage.nom + " est de : " + personnage.life);
// }

// bonusLife(50, hero);

//STORY 2 : BONUS ARMURE

function bonusArmure(armure, personnage){
	console.log("L'armure de " + personnage.nom + " est de : " + personnage.def);
	personnage.def += armure;
	console.log("L'armure de " + personnage.nom + " est de : " + personnage.def);
}

// bonusArmure(20, hero);

//STORY 3 : ATTAQUE MINION

// function attaque(attaquant, defenseur){
// 	console.log("La vie de " + defenseur.nom + " est de : " + defenseur.life);
// 	defenseur.life  -= attaquant.atk;
// 	console.log("La vie de " + defenseur.nom + " est de : " + defenseur.life);
// }

// attaque(minion, hero);

// STORY 4 : BONUS ARMURE + ATTAQUE LIEUTENANT

bonusArmure(20, hero);

function attaque(attaquant, defenseur){
	console.log("La vie de " + defenseur.nom + " est de : " + defenseur.life);
 	console.log("L'armure de " + defenseur.nom + " est de : " + defenseur.def);

	if(defenseur.def > 0 && defenseur.def >= attaquant.atk){
		defenseur.def = defenseur.def - attaquant.atk;		
	} else if(defenseur.def > 0 && defenseur.def < attaquant.atk){
		defenseur.life = defenseur.life - (attaquant.atk - defenseur.def);
		defenseur.def = 0;
	} else {
		defenseur.def = defenseur.def - attaquant.atk;
	}


	console.log("La vie de " + defenseur.nom + " est de : " + defenseur.life);
 	console.log("L'armure de " + defenseur.nom + " est de : " + defenseur.def);

}

attaque(lieutenant, hero);

// STORY 5 : BIG BOSS !

