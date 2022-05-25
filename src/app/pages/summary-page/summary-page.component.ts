import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from 'src/app/core/models';

@Component({
  selector: 'app-summary-page',
  templateUrl: './summary-page.component.html',
  styleUrls: ['./summary-page.component.css'],
})
export class SummaryPageComponent implements OnInit {
  btnTry: string = 'TRY AGAIN';
  userLogin!: User;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.userLogin = JSON.parse(localStorage.getItem('user') || '{}');
  }

  startAgain() {
    this.router.navigate(['/quiz']);
    let userData: User;
    userData = JSON.parse(localStorage.getItem('user') || '{}');
    userData.score = 0;
    userData.step = 0;
    localStorage.setItem('user', JSON.stringify(userData));
  }
}
