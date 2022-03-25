export default class Section {
  constructor({ items, renderer }, selector) {
    this._renderedItems = items;
    this._renderer = renderer;

    this._container = document.querySelector(selector);
  }

  renderItems() {
    this._renderedItems.then((items) =>
      items.forEach((item) => this._renderer(item))
    );
  }

  addItem(element, toBegin) {
    if (toBegin) {
      this._container.prepend(element);
    } else {
      this._container.append(element);
    }
  }
}
