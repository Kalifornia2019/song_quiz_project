import { Component, Input, OnInit } from '@angular/core';

import { LoginService } from '../../services/login.service';
import { User } from '../../models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user$ = this.loginService.user$;
  userLocalStorage!: User;

  @Input() scoreUser: number = 0;

  constructor(public loginService: LoginService) { }

  ngOnInit(): void {
    this.userLocalStorage =JSON.parse(localStorage.getItem('user') || '{}');
  }

}
