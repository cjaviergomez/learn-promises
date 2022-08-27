import './styles.css';

// import { searchHero as searchHeroCallbacks } from './js/callbacks';
import { promiseFast, promiseMedium, promiseSlow } from './js/promises';

import { searchHero } from './js/promises';

const heroId = 'capi2';
const heroId2 = 'iron';

// Callbacks hell muchos callbacks anidados
// searchHeroCallbacks(heroId, (error1, hero1) => {
// 	if (error1) return console.error(error);
// 	searchHeroCallbacks(heroId2, (error2, hero2) => {
// 		if (error2) return console.error(error2);
// 		console.log(`Enviando a consola el héroe ${hero1.nombre} y ${hero2.nombre}`);
// 	});
// });

// Promises hell muchas promesas anidadas
// searchHero(heroId).then(hero1 => {
// 	searchHero(heroId2).then(hero2 => {
// 		console.log(`Enviando a consola el héroe ${hero1.nombre} y ${hero2.nombre}`);
// 	});
// });

// el then se ejecuta si todas las promesas se resuelven de manera exitosa
Promise.all([searchHero(heroId), searchHero(heroId2)])
	.then(([heroe1, heroe2]) => {
		console.log(`Enviando a consola el héroe ${heroe1.nombre} y ${heroe2.nombre}`);
	})
	.catch(error => {
		console.error(error);
	})
	.finally(() => {
		console.log('Finalizando el promise all');
	});

// promiseSlow.then(console.log);
// promiseMedium.then(console.log);
// promiseFast.then(console.log);

// El race captura sólo el resultado de la primera promesa en responder.
Promise.race([promiseSlow, promiseMedium, promiseFast]).then(console.log).catch(console.error);

console.log('¡El programa continúa!');
