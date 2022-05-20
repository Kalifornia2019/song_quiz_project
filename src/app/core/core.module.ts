import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//modules components
import { HeaderModule } from './components/header/header.module';
import { HeaderGenreModule } from './components/header-genre/header-genre.module';
import { OptionsQuizModule } from './components/options-quiz/options-quiz.module';
import { PlayerMainModule } from './components/player-main/player-main.module';
import { PlayerTaskModule } from './components/player-task/player-task.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HeaderModule,
    HeaderGenreModule,
    OptionsQuizModule,
    PlayerMainModule,
    PlayerTaskModule
  ],
  exports: [
    HeaderModule,
    HeaderGenreModule,
    OptionsQuizModule,
    PlayerMainModule,
    PlayerTaskModule
  ],
})
export class CoreModule {

}
