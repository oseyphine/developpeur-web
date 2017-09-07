function Minions(nom, life, atk){
	//On appelle le constructeur du parent
	Character.call(this, nom, life, atk);
};

//Héritage
Minions.prototype = Object.create(Character.prototype);
Minions.prototype.constructor = Minions;

var minion = new Minions('Minion', 10, 10);
var lieutenant = new Minions('Lieutenant minion', 30, 30);
var chef = new Minions('Chef minion', 100, 100);