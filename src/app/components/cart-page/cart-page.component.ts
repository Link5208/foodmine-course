import { Component, inject, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart/cart.service';
import { Cart } from '../../shared/models/Cart';
import { CartItem } from '../../shared/models/CartItem';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart-page',
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css',
})
export class CartPageComponent implements OnInit {
  cart!: Cart;
  private cartService = inject(CartService);

  ngOnInit(): void {
    this.setCart();
  }

  setCart() {
    this.cart = this.cartService.getCart();
  }

  removeFromCart(cartItem: CartItem) {
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();
  }

  changeQuantity(cartItem: CartItem, quantityInString: string) {
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
    this.setCart();
  }
}
