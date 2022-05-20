import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoQuizComponent } from './logo-quiz.component';

describe('LogoQuizComponent', () => {
  let component: LogoQuizComponent;
  let fixture: ComponentFixture<LogoQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoQuizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
