import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../../../services/food/food.service';
import { TagsComponent } from '../tags/tags.component';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { CartService } from '../../../services/cart/cart.service';
import { Food } from '../../shared/models/Food';
import { NotFoundComponent } from '../not-found/not-found.component';

@Component({
  selector: 'app-food-page',
  imports: [TagsComponent, CurrencyPipe, CommonModule, NotFoundComponent],
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css',
})
export class FoodPageComponent implements OnInit {
  food!: Food;

  private activatedRoute = inject(ActivatedRoute);
  private foodService = inject(FoodService);
  private cartService = inject(CartService);
  private router = inject(Router);

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.food = this.foodService.getFoodById(params['id']);
      }
    });
  }

  addToCart() {
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }
}
