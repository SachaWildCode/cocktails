import { Component } from '@angular/core';
import { CocktailService } from '../cocktail.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cocktail-list-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.css',
})
export class CocktailListComponent {
  constructor(private CocktailService: CocktailService) {}
  cocktails = this.CocktailService.getCocktails();
}
