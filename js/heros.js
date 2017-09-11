import { Character } from './character.js'

export class Heros extends Character{
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
};