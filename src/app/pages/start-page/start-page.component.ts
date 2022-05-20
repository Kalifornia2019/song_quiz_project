import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {
  loginForm = this.formBuild.group({
    name: ['', [Validators.required]],
  });

  btnStart: string = "START QUIZ";

  get nameControl() {
    return this.loginForm.get('name');
  }

  constructor(
    private router: Router,
    private formBuild: FormBuilder,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {

  }

  onSubmit() {
    this.loginService.startGame(this.loginForm.value.name);
    this.router.navigate(['/quiz']);
  }

}
