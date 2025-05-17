import { Component, inject, OnInit, Pipe } from '@angular/core';
import { FoodService } from '../../../services/food/food.service';
import { Food } from '../../shared/models/Food';
import { StarRatingModule } from 'angular-star-rating';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [StarRatingModule, CurrencyPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  foodService = inject(FoodService);

  foods: Food[] = [];

  ngOnInit(): void {
    this.foods = this.foodService.getAll();
  }
}
