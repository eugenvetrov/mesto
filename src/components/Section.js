export default class Section {
  constructor({ renderer }, selector) {
    this._renderer = renderer;
    this._container = document.querySelector(selector);
  }

  renderItems(items, toBegin) {
    items.forEach((item) => this.addItem(item, toBegin));
  }

  addItem(item, toBegin) {
    const element = this._renderer(item);
    const cardForRender = element.getCard(element);
    if (toBegin) this._container.prepend(cardForRender);
    this._container.append(cardForRender);
  }
}
