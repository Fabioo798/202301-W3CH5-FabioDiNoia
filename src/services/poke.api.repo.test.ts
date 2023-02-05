// import { PokeStructure } from '../models/pokemon';
// import { PokemonApiRepo } from './poke.api.repo';
// import fetch from 'node-fetch';

// describe('PokemonApiRepo', () => {
//   let repo: PokemonApiRepo;
//   beforeEach(() => {
//     repo = new PokemonApiRepo();
//   });

//   require('fetch-mock').mock(PokemonApiRepo.url, {
//         pokemon: [
//           { name: 'pikachu', type: 'electric' },
//           { name: 'charmander', type: 'fire' },
//         ],
//       });



//       // Verify that the `fetch` function was called with the correct URL
//       expect(fetch).toHaveBeenCalledWith(pokemon);

//       // Verify that the returned data is what we expect
//       expect(pokemon).toEqual([
//         { name: 'pikachu', type: 'electric' },
//         { name: 'charmander', type: 'fire' },
//       ]);
//     });








// const pokemons = await repo.loadPokemon();
// expect(Array.isArray(pokemons)).toBe(true);
// pokemons.forEach((pokemon: PokeStructure) => {
//   expect(pokemon).toHaveProperty('id');
//   expect(pokemon).toHaveProperty('name');
//   expect(pokemon).toHaveProperty('type');