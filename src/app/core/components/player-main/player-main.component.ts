import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  OnChanges,
} from '@angular/core';

import { Genre } from '../../models';
import { Song } from '../../models';

@Component({
  selector: 'app-player-main',
  templateUrl: './player-main.component.html',
  styleUrls: ['./player-main.component.css'],
})
export class PlayerMainComponent implements OnInit, OnChanges {
  @Input() task: Genre[] = [];
  @Input() genreActive: number = 0;
  @Input() actionSong!: Song;

  URL_API: any = 'https://levi9-song-quiz.herokuapp.com/api/';

  time: number = 0;
  timeText: string = '00:00';
  duration: number = 30;
  durationText: string = '00:30';
  icon = '▶';

  @ViewChild('audio') audioPlayerRef!: ElementRef;

  ngOnInit(): void {}

  ngOnChanges() {
    if (this.audioPlayerRef) this.audioPlayerRef.nativeElement.load();
    this.time = 0;
    this.timeText = '00:00';
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

  change(input: HTMLInputElement) {
    this.audioPlayerRef.nativeElement.currentTime = parseInt(input.value);
    this.time = parseFloat(input.value) * 100;
    this.updatePlayer();
  }

  updatePlayer() {
    if (this.audioPlayerRef.nativeElement.readyState != 4) return;
    const currentTime = Math.floor(
      this.audioPlayerRef.nativeElement.currentTime
    );
    this.time = this.audioPlayerRef.nativeElement.currentTime;

    let minsT = Math.floor(currentTime / 60).toString();
    let secsT = Math.floor(currentTime % 60).toString();

    if (secsT.length < 2) secsT = '0' + secsT;

    if (minsT.length < 2) minsT = '0' + minsT;

    this.timeText = minsT + ':' + secsT;

    const duration = Math.floor(this.audioPlayerRef.nativeElement.duration);
    this.duration = duration;

    let minsD = Math.floor(duration / 60).toString();
    let secsD = Math.floor(duration % 60).toString();

    if (secsD.length < 2) secsD = '0' + secsD;

    if (minsD.length < 2) minsD = '0' + minsD;
    this.durationText = minsD + ':' + secsD;
  }
}
