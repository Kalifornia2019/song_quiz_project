import {
  Component,
  OnInit,
  ViewChild,
  ViewChildren,
  ElementRef,
  QueryList,
} from '@angular/core';
import {
  Observable,
  Subscription,
  tap,
  map,
  catchError,
  EMPTY,
  delay,
} from 'rxjs';
import { Router } from '@angular/router';

import { GenreService } from 'src/app/core/services/genre.service';
import { OptionsQuizComponent } from 'src/app/core/components/options-quiz/options-quiz.component';
import { Song } from 'src/app/core/models';
import { Genre } from 'src/app/core/models';
import { User } from 'src/app/core/models';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.css'],
})
export class QuizPageComponent implements OnInit {
  data$!: Observable<Genre[]>;
  isLoading$!: Observable<boolean>;
  error$!: Observable<string>;

  sub!: Subscription;

  btnNext: string = 'NEXT QUESTION';

  random!: number;

  genreHeader: any = [];
  genres: Genre[] = [];
  genreActive: number = 0;

  activeOptionsSong!: Song | undefined;
  scoreUser: number = 0;
  score: number = this.scoreUser;
  activeButton: boolean = true;
  finalAnswer = false;
  passed: boolean = false;

  constructor(private genreService: GenreService, private router: Router) {}

  ngOnInit(): void {
    this.sub = this.genreService
      .getGenreApi()
      .pipe()
      .subscribe((response) => {
        this.genres = response;
        this.genres[this.genreActive].nvclass = 'selected';

        for (let i = 0; i < this.genres.length; i++) {
          if (i < this.genreActive - 1) {
            this.genres[i].nvclass = 'done';
          } else if (i == this.genreActive - 1) {
            this.genres[i].nvclass = 'prev';
          } else if (i == this.genreActive) {
            this.genres[i].nvclass = 'selected';
          }
        }

        if (this.genreActive === this.genres.length - 1)
          this.btnNext = 'SEE MY SCORE';
      });

    this.data$ = this.genreService.genre$;
    this.isLoading$ = this.genreService.isLoading$;
    this.error$ = this.genreService.error$;

    this.random = this.getRandomInt(4);

    const userData = JSON.parse(localStorage.getItem('user') || '{}');
    if (userData) {
      this.scoreUser = userData.score;
      this.score = userData.score;
      this.genreActive = userData.step;
    }
  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  @ViewChild(OptionsQuizComponent) optionsComponent!: OptionsQuizComponent;
  @ViewChildren('audio') playersRef!: QueryList<ElementRef>;

  nextOptions() {
    this.genreActive += 1;
    this.finalAnswer = false;
    this.activeButton = true;
    this.activeOptionsSong = undefined;
    this.random = this.getRandomInt(4);
    this.passed = false;
    this.genres[this.genreActive - 1].nvclass =
      this.genres[this.genreActive - 1].nvclass === 'pass' ? 'prev' : 'done';
    if (this.genreActive < this.genres.length)
      this.genres[this.genreActive].nvclass = 'selected';
    if (this.genreActive === this.genres.length - 1)
      this.btnNext = 'SEE MY SCORE';
    if (this.genreActive === this.genres.length)
      this.router.navigate(['/summary']);

    this.playersRef.forEach((v) => {
      if (v.nativeElement) {
        v.nativeElement.pause();
        v.nativeElement.currentTime = 0;
      }
    });

    const userData = JSON.parse(localStorage.getItem('user') || '{}');
    userData.step = this.genreActive;
    userData.score = this.scoreUser;
    localStorage.setItem('user', JSON.stringify(userData));
  }

  getOptions(event: Song) {
    this.activeOptionsSong = event;
  }

  getScore(score: number) {
    if (score >= 0) {
      this.scoreUser = score;
    }
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }

  pass() {
    this.activeButton = false;
    this.finalAnswer = true;
    this.passed = true;
    this.score = this.scoreUser;
    this.genres[this.genreActive].nvclass = 'pass';
    if (this.genreActive > 0) {
      this.genres[this.genreActive - 1].nvclass = 'done';
    }
  }
}
