import { Component, inject, OnInit } from '@angular/core';
import { Food } from '../../shared/models/Food';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../../../services/food/food.service';
import { TagsComponent } from '../tags/tags.component';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-food-page',
  imports: [TagsComponent, CurrencyPipe],
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css',
})
export class FoodPageComponent implements OnInit {
  food!: Food;
  private activatedRoute = inject(ActivatedRoute);
  private foodService = inject(FoodService);

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.food = this.foodService.getFoodById(params['id']);
      }
    });
  }
}
