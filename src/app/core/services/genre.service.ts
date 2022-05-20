import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, catchError, EMPTY, switchMap, tap, delay } from 'rxjs';
import { Genre } from '../models';

@Injectable({
  providedIn: 'root',
})
export class GenreService {

  ROOT_URL = 'https://levi9-song-quiz.herokuapp.com/api/data';

  private _genre$ = new BehaviorSubject<Genre[]>([]);
  genre$ = this._genre$.asObservable();

  private _isLoading$ = new BehaviorSubject<boolean>(false);
  isLoading$ = this._isLoading$.asObservable();

  private _error$ = new BehaviorSubject<string>('');
  error$ = this._error$.asObservable();

  constructor(private http: HttpClient) {}

  getGenreApi() {
    this._isLoading$.next(true);

    const link = this.ROOT_URL
    return this.http.get<Genre[]>(link).pipe(
      tap((data) => {
        this._isLoading$.next(false);
        this._genre$.next(data);

      }),
      catchError(() => {
        const message = "Error, Couldn't get genre";
        this._isLoading$.next(false);
        this._error$.next(message);
        return EMPTY;
      })
    );
  }

}
