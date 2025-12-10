import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sparkles } from './sparkles';

describe('Sparkles', () => {
  let component: Sparkles;
  let fixture: ComponentFixture<Sparkles>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sparkles]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sparkles);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
