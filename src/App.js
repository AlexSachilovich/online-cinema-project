import { Component } from "./core";
import "./components/atoms/typography/Headings/H1";

export class App extends Component {
  render() {
    return `
    <it-h1>
      <div>hello1</div>
      <div>hello2</div>
      <div>hello3</div>
      <div>hello4</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello2345345</div>
    </it-h1>`;
  }
}

customElements.define("my-app", App);
