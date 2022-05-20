import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SummaryPageRoutingModule } from './summary-page-routing.module';
import { SummaryPageComponent } from './summary-page.component';
import { LogoQuizModule } from 'src/app/shared/components/logo-quiz/logo-quiz.module';
import { ButtonQuizModule } from 'src/app/shared/components/button-quiz/button-quiz.module';

@NgModule({
  declarations: [SummaryPageComponent],
  imports: [
    CommonModule,
    SummaryPageRoutingModule,
    LogoQuizModule,
    ButtonQuizModule
  ],
  exports: [SummaryPageComponent],
})

export class SummaryPageModule {}
