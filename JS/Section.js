import { initialCards } from './cardsArray.js';
import Card from './Card.js';
export default class Section {
    constructor({items, renderer}, containerSelector){
        this._items = items;
        this._renderer = renderer;
        this._containerSelector = document.querySelector(containerSelector);
    }
    renderItems(){
        this._items.forEach(item => {
            this._renderer(item);
            this.addItem(this._renderer(item))
            
        });
    }
    addItem(elem){
        this._containerSelector.prepend(elem)
    }
}
const renderCard = new Section({
    items: initialCards,
    renderer: (item) => {
        const card = new Card(item.link, item.name, '.cardTemplate');
        const cardElement = card.creatElement();
        return cardElement;
    }
}, '.elements');
renderCard.renderItems();
