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

export const searchHero = id => {
	const hero = heroes[id];

	return new Promise((resolve, reject) => {
		if (hero) {
			setTimeout(() => resolve(hero), 1000);
		} else {
			reject(`No existe un héroe con el id ${id}`);
		}
	});
};

/**
 * El async hace que la función retorne una promesa y resuelva lo del return de la función.
 */
export const searchHeroAsync = async id => {
	const hero = heroes[id];

	if (hero) {
		return hero;
	} else {
		// El throw es para lanzar un error y reemplaza al reject de la promesa.
		// Tambien se puede usar el throw Error para tener una error más detallado.
		// throw new Error(`No existe un héroe con el id ${id}`);
		throw `No existe un héroe con el id ${id}`;
	}
};

const promiseSlow = new Promise((resolve, _reject) => {
	setTimeout(() => resolve('Promise Slow'), 2000);
});

const promiseMedium = new Promise((resolve, _reject) => {
	setTimeout(() => resolve('Promise Medium'), 1500);
});

const promiseFast = new Promise((resolve, _reject) => {
	setTimeout(() => resolve('Promise Fast'), 1000);
});

export { promiseSlow, promiseMedium, promiseFast };
