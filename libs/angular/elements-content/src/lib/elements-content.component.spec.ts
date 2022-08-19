import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementsContentComponent } from './elements-content.component';

describe('ElementsContentComponent', () => {
  let component: ElementsContentComponent;
  let fixture: ComponentFixture<ElementsContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElementsContentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ElementsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
