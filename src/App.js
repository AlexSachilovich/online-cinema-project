import { Component } from "./core";
import "./components/atoms/typography/Headings/H1";

export class App extends Component {
  render() {
    return `
    <it-h1></it-h1>`;
  }
}

customElements.define("my-app", App);
