import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogoQuizModule } from 'src/app/shared/components/logo-quiz/logo-quiz.module';

// Components
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, LogoQuizModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
