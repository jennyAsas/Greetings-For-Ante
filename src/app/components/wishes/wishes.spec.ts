import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wishes } from './wishes';

describe('Wishes', () => {
  let component: Wishes;
  let fixture: ComponentFixture<Wishes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Wishes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Wishes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
