export default class Section {
  constructor({ renderer }, selector) {
    this._renderer = renderer;
    this._container = document.querySelector(selector);
  }

  renderItems(items) {
    items.forEach((item) => this.addItem(item));
  }

  addItem(item, toBegin) {
    const elementForRender = this._renderer(item);
    if (toBegin) this._container.prepend(elementForRender);
    this._container.append(elementForRender);
  }
}
