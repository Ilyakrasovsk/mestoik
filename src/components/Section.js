export default class Section {
  constructor({data, renderer}, containerSelector){
    this._renderedItems = data;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }
  addItem(userData){
    this._renderedItems.forEach(item =>
      this._renderer(item, userData));
  }
  setItem(element){
    this._container.append(element);
  }
  setPreItem(element){
    this._container.prepend(element);
  }
  setItemsRendered(data){
    this._renderedItems = data;
  }
};
