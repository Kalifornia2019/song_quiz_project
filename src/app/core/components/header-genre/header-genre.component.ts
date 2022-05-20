import { Component, OnInit, Input, HostBinding, HostListener } from '@angular/core';
import { Genre } from '../../models';

@Component({
  selector: 'app-header-genre',
  templateUrl: './header-genre.component.html',
  styleUrls: ['./header-genre.component.css']
})
export class HeaderGenreComponent implements OnInit {
  @Input() genre: Genre[] = [];

  @Input() activeGenre: number = 0;
  @Input() pass: boolean = false;

  constructor() { }

  ngOnInit(): void {

  }
}
