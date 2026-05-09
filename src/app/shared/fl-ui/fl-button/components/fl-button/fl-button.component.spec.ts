import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlButtonComponent } from '@ui/fl-button/components/fl-button/fl-button.component';

describe('FlButtonComponent', () => {
  let component: FlButtonComponent;
  let fixture: ComponentFixture<FlButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FlButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
