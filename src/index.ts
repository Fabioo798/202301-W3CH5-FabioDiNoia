import { Card } from './components/card/card';
import { Cards } from './components/cards/cards';
import { PokemonApiRepo } from './services/poke.api.repo';

console.log(new Cards('main', new PokemonApiRepo()));
