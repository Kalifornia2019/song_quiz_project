import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizPageRoutingModule } from './quiz-page-routing.module';
import { QuizPageComponent } from './quiz-page.component';
import { CoreModule } from 'src/app/core/core.module';
import { ButtonQuizModule } from 'src/app/shared/components/button-quiz/button-quiz.module';

@NgModule({
  declarations: [QuizPageComponent],
  imports: [
    CommonModule,
    QuizPageRoutingModule,
    CoreModule,
    ButtonQuizModule
  ],
  exports: [QuizPageComponent],
})

export class QuizPageModule {}
