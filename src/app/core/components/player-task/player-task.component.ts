import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

import { Genre } from '../../models';

@Component({
  selector: 'app-player-task',
  templateUrl: './player-task.component.html',
  styleUrls: ['./player-task.component.css'],
})
export class PlayerTaskComponent implements OnInit, OnChanges {
  @Input() task: Genre[] = [];
  @Input() genreActive: number = 0;
  @Input() random!: number;
  @Input() finalAnswer!: boolean;

  time: number = 0;
  timeText: string = '00:00';
  duration: number = 30;
  durationText: string = '00:30';
  icon = '▶';

  URL_API: any = 'https://levi9-song-quiz.herokuapp.com/api/';

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['genreActive']) {
      this.time = 0;
      this.timeText = '00:00';
      if (this.audioPlayerRef)
        if (!this.audioPlayerRef.nativeElement.paused) this.play();
    }
  }

  @ViewChild('audio') audioPlayerRef!: ElementRef;

  change(input: HTMLInputElement) {
    this.audioPlayerRef.nativeElement.currentTime = parseInt(input.value);
    this.time = parseFloat(input.value) * 100;
    this.updatePlayer();
  }

  play() {
    if (this.audioPlayerRef.nativeElement.paused) {
      this.audioPlayerRef.nativeElement.play();
      this.icon = '❚❚';
    } else {
      this.audioPlayerRef.nativeElement.pause();
      this.icon = '▶';
    }

    this.audioPlayerRef.nativeElement.addEventListener('timeupdate', () =>
      this.updatePlayer()
    );
  }

  updatePlayer() {
    const currentTime = Math.floor(
      this.audioPlayerRef.nativeElement.currentTime
    );
    this.time = this.audioPlayerRef.nativeElement.currentTime;

    let minsT = Math.floor(currentTime / 60).toString();
    let secsT = Math.floor(currentTime % 60).toString();

    if (secsT.length < 2) secsT = '0' + secsT;

    if (minsT.length < 2) minsT = '0' + minsT;

    this.timeText = minsT + ':' + secsT;

    const duration =
      Math.floor(this.audioPlayerRef.nativeElement.duration) || 30;
    this.duration = duration;

    let minsD = Math.floor(duration / 60).toString();
    let secsD = Math.floor(duration % 60).toString();

    if (secsD.length < 2) secsD = '0' + secsD;

    if (minsD.length < 2) minsD = '0' + minsD;
    this.durationText = minsD + ':' + secsD;
  }
}
