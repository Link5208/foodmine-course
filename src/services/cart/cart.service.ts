import { Injectable } from '@angular/core';
import { Cart } from '../../app/shared/models/Cart';
import { Food } from '../../app/shared/models/Food';
import { CartItem } from '../../app/shared/models/CartItem';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Cart = new Cart();
  constructor() {}

  addToCart(food: Food): void {
    let cartItem = this.cart.items.find((item) => item.food.id === food.id);
    if (cartItem) {
      this.changeQuantity(food.id, cartItem.quantity + 1);
      return;
    } else {
      this.cart.items.push(new CartItem(food));
    }
  }

  removeFromCart(id: number): void {
    this.cart.items = this.cart.items.filter((item) => item.food.id != id);
  }

  changeQuantity(id: number, quatity: number) {
    let cartItem = this.cart.items.find((item) => item.food.id === id);
    if (!cartItem) {
      return;
    }
    cartItem.quantity = quatity;
  }

  getCart(): Cart {
    return this.cart;
  }
}
