function Heros(nom, life, atk, def){
	//On appelle le constructeur du parent
	Character.call(this, nom, life, atk);

	this.def = def;

	this.bonusLife = function(nbrBonusLife){
		console.log("La VIE de " + this.nom + " AVANT le bonusLife est de : " + this.life);
		this.life += nbrBonusLife;
		console.log("La VIE de " + this.nom + " APRES le bonusLife est de : " + this.life);	
	};

	this.bonusArmor = function(nbrBonusArmure){
		console.log("L'ARMURE de " + this.nom + " AVANT le bonusArmure est de : " + this.def);
		this.def += nbrBonusArmure;
		console.log("L'ARMURE de " + this.nom + " APRES le bonusArmure est de : " + this.def);	
	};

	this.sufferedAttack = function(ennemies){
		console.log("La VIE de " + this.nom + " AVANT l'attaque de " + ennemies.nom + " est de : " + this.life);
 	 	console.log("L'ARMURE de " + this.nom + " AVANT l'attaque de " + ennemies.nom + " est de : " + this.def);

		if(this.def > 0 && this.def >= ennemies.atk){
			this.def -= ennemies.atk;		
		} else if(this.def > 0 && this.def < ennemies.atk){
			this.life -= (ennemies.atk - this.def);
			this.def = 0;
		} else {
			this.life -= ennemies.atk;
		};

		console.log("La VIE de " + this.nom + " APRES l'attaque de " + ennemies.nom + " est de : " + this.life);
 	 	console.log("L'ARMURE de " + this.nom + " APRES l'attaque de " + ennemies.nom + " est de : " + this.def);
	};

	this.chanceArmor = function(chanceArmor){
		var randomArmor = Math.floor(Math.random()*chanceArmor);
		//console.log("NAN : " + chanceArmure);
		//console.log("randomArmure : " + randomArmure);

		console.log("L'ARMURE de " + this.nom + " est de : " + this.def);
		if(randomArmor == (chanceArmor-1)){
			console.log(this.nom + " a bénéficié du bonusArmure.");
			this.bonusArmor(20);
			console.log("Son ARMURE est maintenant de : " + this.def);
		} else {
			console.log("Pas de bonusArmure pour " + this.nom + ". Sa défense (ARMURE) reste à " + this.def);
		}
	};

	this.chanceLife = function(chanceLife){
		var randomLife = Math.floor(Math.random()*chanceLife);
		//console.log("randomLife : " + randomLife);

		console.log(this.nom + " a une VIE de : " + this.life);
		if(randomLife == (chanceLife-1)){
			console.log(this.nom + " a bénéficié de bonusLife et sa VIE est de : " + this.life);
			this.bonusLife(50);
			console.log("Sa VIE est maintenant de : " + this.life);
		} else {
			console.log("Pas de bonusLife pour " + this.nom + ". Sa VIE reste à " + this.life);			
		}
	};
};

//Héritage
Heros.prototype = Object.create(Character.prototype);
Heros.prototype.constructor = Heros;

var hero = new Heros('Hero', 200, 15, 0);