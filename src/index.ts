import { Card } from './components/card/card';
import { Cards } from './components/cards/cards';
import { Footer } from './footer/footer';
import { Header } from './header/header';
import { PokemonApiRepo } from './services/poke.api.repo';

new Cards('main', new PokemonApiRepo());
new Header('#root');
new Footer('#root');
