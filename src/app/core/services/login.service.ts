import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { User } from '../models';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private _user$ = new BehaviorSubject<User | null>(null);
  user$ = this._user$.asObservable();

  isLoggedIn = false;

  userLogin!: string;

  public count$ = new Subject<number>();

  constructor(private router: Router) {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if(user)
      this._user$.next(user);
  }

  startGame( name: string) {
    console.log(name)
    const user = {
      name,
      score: 0,
      step: 0
    };

    this.userLogin = name;

    localStorage.setItem('user', JSON.stringify(user));
    this._user$.next(user);
  }

  changeScore(count: number) {
    this.count$.next(count);
  }

  getUserLogin(){
    return this.userLogin;
  }


}
