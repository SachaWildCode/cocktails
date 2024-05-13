import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Cocktails } from './interfaces/cocktails';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  private http = inject(HttpClient);

  constructor() {}

  getCocktails(): Observable<Cocktails[]> {
    return this.http.get<Cocktails[]>('assets/cocktails.json');
  }
}
