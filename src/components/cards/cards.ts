import { PokeStructure } from '../../models/pokemon';
import { PokemonApiRepo } from '../../services/poke.api.repo';
import { Card } from '../card/card';
import { Component } from '../component/component';


export class Cards extends Component {
  public cards: PokeStructure[];
  constructor(public selector: string, public repo: PokemonApiRepo) {
    super();
    this.cards = [];
    this.template = this.createTemplate();
    this.render('afterbegin');
    this.load();
  }

  async load() {
    this.cards = await this.repo.loadPokemon();
    this.cards = Object.values(await this.repo.loadPokemon());
    console.log(typeof this.cards);
    this.render('afterbegin');
  }

  async updateCard(card: PokeStructure) {
    const finalCard = await this.repo.update(card);
    this.cards = this.cards.map((item) =>
      item.id === card.id ? finalCard : item
    );
    this.render('afterbegin');
  }

  render(place: globalThis.InsertPosition) {
    super.render(place);
    for (const item of Object.values(this.cards)) {
      new Card('.poke-card', item, this.updateCard.bind(this));
    }
  }

  createTemplate() {
    return `<div class="poke-cards></div>"`;
  }
}
