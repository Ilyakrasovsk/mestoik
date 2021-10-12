export default class Section {
  constructor({data, renderer}, containerSelector){
    this._renderedItems = data;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }
  addItem(){
    this._renderedItems.forEach(item =>
    this._renderer(item));
    //this.setItem(this._renderer(item));
  
  }
  setItem(element){
    this._container.prepend(element);
  }
};