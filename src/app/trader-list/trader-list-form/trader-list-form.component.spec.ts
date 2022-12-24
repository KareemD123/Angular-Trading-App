import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraderListFormComponent } from './trader-list-form.component';

describe('TraderListFormComponent', () => {
  let component: TraderListFormComponent;
  let fixture: ComponentFixture<TraderListFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraderListFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraderListFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
