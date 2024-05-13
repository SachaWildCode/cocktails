import { Injectable } from '@angular/core';
import { Cocktails } from './interfaces/cocktails';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  constructor() {}

  private margherita: Cocktails = {
    name: 'Margherita',
    img: 'https://www.averiecooks.com/wp-content/uploads/2018/01/margherita-pizza-5.jpg',
    price: 10,
  };
  private peperoni: Cocktails = {
    name: 'Peperoni',
    img: 'https://www.averiecooks.com/wp-content/uploads/2018/01/margherita-pizza-5.jpg',
    price: 20,
  };
  private hawaiian: Cocktails = {
    name: 'Hawaiian',
    img: 'https://www.averiecooks.com/wp-content/uploads/2018/01/margherita-pizza-5.jpg',
    price: 10,
  };
  getCocktails(): Array<Cocktails> {
    return [this.peperoni, this.margherita, this.hawaiian];
  }
}
