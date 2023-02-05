import { PokeStructure } from '../../models/pokemon';
import { Component } from '../component/component';

export class Card extends Component {
  constructor(
    public selector: string,
    public card: PokeStructure,
    public updateCard: (card: PokeStructure) => void
  ) {
    super();
    this.card = { ...card };
    this.template = this.createTemplate();
    this.render('beforeend');
  }

  render(place: globalThis.InsertPosition) {
    super.render(place);
    this.element.querySelector('dbutton')?.addEventListener('click', () => {
      this.updateCard(this.card);
    });
  }

  createTemplate() {
    return `
    <div class="poke-card">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.card.id}.png" alt="poke-card">
        <p>${this.card.name}</p>
        <button class="dButton">Info</button>
        <button class="fButton">Favorite</button>
        </div>
    `;
  }
}
