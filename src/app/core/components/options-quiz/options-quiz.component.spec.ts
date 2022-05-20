import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsQuizComponent } from './options-quiz.component';

describe('OptionsQuizComponent', () => {
  let component: OptionsQuizComponent;
  let fixture: ComponentFixture<OptionsQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionsQuizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionsQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
