import { PokemonApiRepo } from './poke.api.repo';
import fetch from 'node-fetch';

describe('first', () => {
  let repo: PokemonApiRepo;
  beforeEach(() => {
    repo = new PokemonApiRepo();
  });
  test('should first', () => {
    console.log(repo.loadPokemon());
  });
});
