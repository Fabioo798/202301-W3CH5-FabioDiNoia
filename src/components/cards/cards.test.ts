import { screen, fireEvent } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { PokeStructure } from "../../models/pokemon";
import { Card } from '../card/card';
import { Cards } from "./cards";


describe('Given Card component', () => {
  const updateMock = jest.fn();
  const mockCard: PokeStructure =
{id: 1, name: 'Fabio', favorite: false};
let element: Card;
beforeEach(() => {
  document.body.innerHTML = '<ul></ul>';
  element = new Card('ul', mockCard, updateMock);
});
  test('It should be in the document', () => {
    expect(element).toBeInstanceOf(Card);
});
});
//   test('It render the card in the document', () => {
//     const div = screen.getAllByTitle('div');
//     expect(div).toBeInTheDocument();
//     // const span = screen.getByText(mockCard.name);
//     // expect(span).toBeInTheDocument();
//   });
// })