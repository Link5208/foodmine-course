import { Component, inject, Input, OnInit } from '@angular/core';
import { Tag } from '../../shared/models/Tag';
import { RouterLink } from '@angular/router';
import { FoodService } from '../../../services/food/food.service';

@Component({
  selector: 'app-tags',
  imports: [RouterLink],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css',
})
export class TagsComponent implements OnInit {
  tags?: Tag[];
  @Input() foodPageTags?: string[];
  private foodService = inject(FoodService);

  ngOnInit(): void {
    if (!this.foodPageTags) {
      this.tags = this.foodService.getAllTags();
    }
  }
}
