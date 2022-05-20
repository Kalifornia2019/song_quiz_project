import { Component, OnInit, Input,  Renderer2, Output, EventEmitter  } from '@angular/core';

import { Genre } from '../../models';
import { Song } from '../../models';

@Component({
  selector: 'app-options-quiz',
  templateUrl: './options-quiz.component.html',
  styleUrls: ['./options-quiz.component.css']
})
export class OptionsQuizComponent implements OnInit {

  @Input() options: Genre[] = [];
  @Input() genreActive: number = 0;
  @Input() random!: number;

  @Input() finalAnswer: boolean = false;
  scoreUser: number = 0;

  @Output() optionsData = new EventEmitter();
  @Output() scoreFinal = new EventEmitter();
  @Output() pass = new EventEmitter();

  constructor(private renderer: Renderer2) {

  }

  ngOnInit(): void {
    const userData = JSON.parse(localStorage.getItem('user') || '{}');
      this.scoreUser = userData.score;

  }

  clickOptions(event: any, index: number) {
    let arraySong = this.options[this.genreActive].data.map(songs => {
      return songs;
    });

    let oldClass = event.target.getAttribute('class');
    if(!this.finalAnswer){
      if(index === this.random){
        this.renderer.setAttribute(event.target, "class", oldClass + ' success');
        this.scoreUser += 3;
        this.options[this.genreActive].nvclass = "pass";
        this.scoreFinal.emit(this.scoreUser);
        this.pass.emit(true);
      }
      else{
        this.renderer.setAttribute(event.target, "class", oldClass + ' wrong');
        this.scoreUser -= 1;
      }
    }
    else {
    }

    this.optionsData.emit(arraySong[index]);
    this.scoreFinal.emit(this.scoreUser);
  }



}
