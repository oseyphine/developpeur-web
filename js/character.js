function Character(nom, life, atk){
	this.nom = nom;
	this.life = life;
	this.atk = atk;

};

Character.prototype.attack = function(enemy){
	// Explication de la logique/pratique
	// ATTENTION ICI LE PARAMETRE 'enemy' a pour but de contenir un objet
	// Pour pouvoir modeler facilement et agrémenter les différents >> console.log <<, la narration 
	// Il serait plus logique de mettre 'enemy.atk' en paramètre
	// Du coup à adapter PARTOUT si changement
	enemy.sufferedAttack(this);
};

Character.prototype.sufferedAttack = function(enemy){
	console.log("La VIE de " + this.nom + " AVANT l'attaque de " + enemy.nom + " est de : " + this.life);
	this.life -= enemy.atk;
	console.log("La VIE de " + this.nom + " APRES l'attaque de " + enemy.nom + " est de : " + this.life);
};