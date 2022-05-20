import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { PlayerTaskComponent } from './player-task.component';

@NgModule({
  declarations: [PlayerTaskComponent],
  imports: [CommonModule],
  exports: [PlayerTaskComponent],
})
export class PlayerTaskModule {}
