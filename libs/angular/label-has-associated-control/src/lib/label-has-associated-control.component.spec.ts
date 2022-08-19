import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelHasAssociatedControlComponent } from './label-has-associated-control.component';

describe('LabelHasAssociatedControlComponent', () => {
  let component: LabelHasAssociatedControlComponent;
  let fixture: ComponentFixture<LabelHasAssociatedControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LabelHasAssociatedControlComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LabelHasAssociatedControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
