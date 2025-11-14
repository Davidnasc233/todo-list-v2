import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementTasks } from './management-tasks';

describe('ManagementTasks', () => {
  let component: ManagementTasks;
  let fixture: ComponentFixture<ManagementTasks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagementTasks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagementTasks);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
