import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { Header } from './header';

import '/header.scss';

describe('Given Header component', () => {
  test('my Header', () => {
    document.body.innerHTML = `<slot></slot>`;
    const mockTitle = 'Test';
    const element = new Header('slot', mockTitle);
    expect(element).toBeInstanceOf(Header);

    const h1 = screen.getByRole('heading');
    expect(h1).toBeInTheDocument();
  });
});
