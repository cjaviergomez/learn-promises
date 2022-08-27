import { searchHero, searchHeroAsync } from './promises';

const heroesIds = ['capi', 'iron'];
const heroesPromises = heroesIds.map(searchHero);

export const getHeroesArray = async () => {
	// const heroesArray = [];

	// for (const id of heroesIds) {
	// 	// TODO: Tener cuidado al implementar el await dentro de un forEach, ya que hace que la función demore
	// 	// por cada iteración. Lo ideal es retornar el Promise.all con await.
	// 	// const heroe = await searchHeroAsync(id);
	// 	const heroe = searchHeroAsync(id);
	// 	heroesArray.push(heroe);
	// }

	// return await Promise.all(heroesArray);
	return await Promise.all(heroesIds.map(id => searchHeroAsync(id)));
};

export const getHeroAwait = async id => {
	try {
		const hero = await searchHeroAsync(id);
		return hero;
	} catch (error) {
		return {
			nombre: 'Sin nombre',
			poder: 'Sin poder'
		};
	}
};

export const heroesCicle = async () => {
	console.time('heroesCicle');

	// const heroes = await Promise.all(heroesPromises);
	// heroes.forEach(hero => console.log(hero));

	for await (const hero of heroesPromises) {
		console.log(hero);
	}

	console.timeEnd('heroesCicle');
};

export const heroIfAwait = async id => {
	if ((await searchHeroAsync(id)).nombre === 'Ironman') {
		console.log('Ironman is the best');
	} else {
		console.log('Naaaa');
	}
};
