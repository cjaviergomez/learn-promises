const heroes = {
	capi: {
		nombre: 'Capitán América',
		poder: 'Aguantar inyecciones sin morir'
	},
	iron: {
		nombre: 'Ironman',
		poder: 'Escapar de los ataques'
	}
};

export const searchHero = (id, callback) => {
	const hero = heroes[id];

	if (hero) {
		callback(null, hero);
	} else {
		// El primer argumento de un callback es siempre un error.
		callback(`No existe un héroe con el id ${id}`);
	}
};
