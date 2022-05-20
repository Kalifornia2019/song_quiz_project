import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Song } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ScoreService {

  scoreUser: number = 0;

  constructor() {}

}
