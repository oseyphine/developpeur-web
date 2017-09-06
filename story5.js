// STORY 5 : Le héros doit combattre le chef minion durant 5 tours. Avant chaque tour le héros a 1 chance sur 3 d'obtenir de l'armure et 1 chance sur 5 d'obtenir de la vie. A chaque round le héros attaque le chef minion puis le chef minion attaque le héros (Afficher pour chaques round: la valeur d'armure et la quantité de vie avant chaque attaque)

console.log('STORY 5 : LE BIG BOSS');

let nbrTour = 5;

// LANCEMENT DES 5 TOURS DE COMBAT

for (var i=1; i<(nbrTour+1); i++){
	console.log("NOMBRE DE TOUR: " + i);
	hero.chanceArmor(3);
	hero.chanceLife(5);
	hero.attack(chef);
	chef.attack(hero);
}
