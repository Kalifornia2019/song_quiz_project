import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { StartPageRoutingModule } from './start-page-routing.module';
import { StartPageComponent } from './start-page.component';

import { ButtonQuizModule } from 'src/app/shared/components/button-quiz/button-quiz.module';
import { LogoQuizModule } from 'src/app/shared/components/logo-quiz/logo-quiz.module';

@NgModule({
  declarations: [StartPageComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonQuizModule,
    LogoQuizModule,

    StartPageRoutingModule
  ],
  exports: [StartPageComponent],
})

export class StartPageModule {}
