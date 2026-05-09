import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlFormComponent } from '@ui/fl-form/components/fl-form/fl-form.component';

describe('FlFormComponent', () => {
  let component: FlFormComponent;
  let fixture: ComponentFixture<FlFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FlFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
