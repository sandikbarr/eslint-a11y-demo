import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltTextComponent } from './alt-text.component';

describe('AltTextComponent', () => {
  let component: AltTextComponent;
  let fixture: ComponentFixture<AltTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AltTextComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AltTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
