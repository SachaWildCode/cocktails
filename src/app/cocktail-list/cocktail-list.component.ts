import { Component, inject } from '@angular/core';
import { CocktailService } from '../cocktail.service';
import { CommonModule } from '@angular/common';
import { Cocktails } from '../interfaces/cocktails';

@Component({
  selector: 'app-cocktail-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.css',
})
export class CocktailListComponent {
  cocktails: Cocktails[] = [];

  private cocktailService = inject(CocktailService);

  ngOnInit(): void {
    this.cocktailService.getCocktails().subscribe((cocktailsFromJsonFile) => {
      this.cocktails = cocktailsFromJsonFile;
    });
  }
}
