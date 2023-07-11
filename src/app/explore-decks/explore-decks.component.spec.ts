import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreDecksComponent } from './explore-decks.component';

describe('ExploreDecksComponent', () => {
  let component: ExploreDecksComponent;
  let fixture: ComponentFixture<ExploreDecksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExploreDecksComponent]
    });
    fixture = TestBed.createComponent(ExploreDecksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
