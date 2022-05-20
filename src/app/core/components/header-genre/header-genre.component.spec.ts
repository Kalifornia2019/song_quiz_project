import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderGenreComponent } from './header-genre.component';

describe('HeaderGenreComponent', () => {
  let component: HeaderGenreComponent;
  let fixture: ComponentFixture<HeaderGenreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderGenreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
