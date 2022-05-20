import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { PlayerMainComponent } from './player-main.component';

@NgModule({
  declarations: [PlayerMainComponent],
  imports: [CommonModule],
  exports: [PlayerMainComponent],
})
export class PlayerMainModule {}
