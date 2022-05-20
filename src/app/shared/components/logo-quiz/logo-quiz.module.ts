import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoQuizComponent } from './logo-quiz.component';

@NgModule({
  declarations: [LogoQuizComponent],
  imports: [
    CommonModule
  ],
  exports: [
    LogoQuizComponent
  ]
})
export class LogoQuizModule { }
