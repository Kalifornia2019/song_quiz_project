import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogoQuizModule } from 'src/app/shared/components/logo-quiz/logo-quiz.module';

// Components
import { HeaderGenreComponent } from './header-genre.component';

@NgModule({
  declarations: [HeaderGenreComponent],
  imports: [CommonModule, LogoQuizModule],
  exports: [HeaderGenreComponent],
})
export class HeaderGenreModule {}
