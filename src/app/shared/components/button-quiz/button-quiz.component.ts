import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-quiz',
  templateUrl: './button-quiz.component.html',
  styleUrls: ['./button-quiz.component.css']
})
export class ButtonQuizComponent implements OnInit {
  @Input() disabled = false;
  @Input() fullWidth = false;

  @Input() btnText!: string;

  @Output() click = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.disabled)
  }

  onClick() {
    this.click.emit();
  }

}
