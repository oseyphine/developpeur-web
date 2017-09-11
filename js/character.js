export class Character {
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

};