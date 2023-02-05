/* eslint-disable no-unused-vars */

import { Component } from "../components/component/component";



export class Footer extends Component {
  constructor(public selector: string) {
    super();
    this.template = this.createTemplate();
    this.render('beforeend');
  }

  createTemplate() {
    return `
    <footer class="footer">
      <address>ISDI Coders</address>
    </footer>`;
  }
}
