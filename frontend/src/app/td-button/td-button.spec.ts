import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdButton } from './td-button';

describe('TdButton', () => {
  let component: TdButton;
  let fixture: ComponentFixture<TdButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TdButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TdButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
