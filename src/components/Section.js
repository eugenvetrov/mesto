export default class Section {
  constructor({ renderer }, selector) {
    this._renderer = renderer;
    this._container = document.querySelector(selector);
  }

  renderItems(items) {
    items.forEach((item) => this.addItem(item));
  }

  addItem(item, toBegin) {
    const element = this._renderer(item);
    const elementForRender = element.getCard(element);
    if (toBegin) this._container.prepend(elementForRender);
    this._container.append(elementForRender);
  }
}
