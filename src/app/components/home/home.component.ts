import { Component, inject, OnInit, Pipe } from '@angular/core';
import { FoodService } from '../../../services/food/food.service';
import { Food } from '../../shared/models/Food';
import { CurrencyPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-home',
  imports: [CurrencyPipe, SearchComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  private foodService = inject(FoodService);
  private route = inject(ActivatedRoute);
  foods: Food[] = [];

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['searchTerm']) {
        this.foods = this.foodService
          .getAll()
          .filter((food) =>
            food.name.toLowerCase().includes(params['searchTerm'].toLowerCase())
          );
      } else {
        this.foods = this.foodService.getAll();
      }
    });
  }
}
