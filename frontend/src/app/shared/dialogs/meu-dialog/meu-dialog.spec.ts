import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuDialog } from './meu-dialog';

describe('MeuDialog', () => {
  let component: MeuDialog;
  let fixture: ComponentFixture<MeuDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeuDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeuDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
