import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { OptionsQuizComponent } from './options-quiz.component';

@NgModule({
  declarations: [OptionsQuizComponent],
  imports: [CommonModule],
  exports: [OptionsQuizComponent],
})
export class OptionsQuizModule {}
