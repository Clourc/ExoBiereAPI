import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Beer } from './beer';
import { Observable, catchError, map, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BeerService {
  constructor(private http: HttpClient) {}

  getBeers(): Observable<Beer[]> {
    return this.http.get<Beer[]>('https://api.punkapi.com/v2/beers').pipe(
      tap((response) => console.log(response)),
      catchError((error) => {
        console.error(error);
        return of(error, []);
      })
    );
  }

  getBeer(beerId: string | null): Observable<Beer> {
    return this.http
      .get<Beer[]>(`https://api.punkapi.com/v2/beers/${beerId}`)
      .pipe(
        tap((response) => console.log(response)),
        map((data) => data[0]),
        catchError((error) => {
          console.error(error);
          return of(error, undefined);
        })
      );
  }

  getBeerPage(pageNb: number): Observable<Beer[]> {
    return this.http
      .get<Beer[]>('https://api.punkapi.com/v2/beers?page=' + pageNb)
      .pipe(
        tap((response) => console.log(response)),
        catchError((error) => {
          console.error(error);
          return of(error, []);
        })
      );
  }

  getRandomBeer(): Observable<Beer> {
    return this.http
      .get<Beer[]>('https://api.punkapi.com/v2/beers/random')
      .pipe(
        tap((response) => console.log(response)),
        map((data) => data[0]),
        catchError((error) => {
          console.error(error);
          return of(error, []);
        })
      );
  }
}
