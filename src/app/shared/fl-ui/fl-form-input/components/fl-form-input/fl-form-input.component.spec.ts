import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { FlFormInputComponent } from '@ui/fl-form-input/components/fl-form-input/fl-form-input.component';

@Component({
  imports: [FlFormInputComponent, ReactiveFormsModule],
  template: `
    <form [formGroup]="form">
      <fl-form-input label="Email address" placeholder="Email address" formControlName="email" />
    </form>
  `,
})
class TestHostComponent {
  form = new FormGroup({
    email: new FormControl(''),
  });
}

describe('FlFormInputComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let hostComponent: TestHostComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    hostComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(hostComponent).toBeTruthy();
  });

  it('should write form value to the input', () => {
    hostComponent.form.controls.email.setValue('test value');
    fixture.detectChanges();

    const input = fixture.nativeElement.querySelector('input') as HTMLInputElement;

    expect(input.value).toBe('test value');
  });

  it('should emit value changes from input events', () => {
    const input = fixture.nativeElement.querySelector('input') as HTMLInputElement;

    input.value = 'new value';
    input.dispatchEvent(new Event('input'));

    expect(hostComponent.form.controls.email.value).toBe('new value');
  });

  it('should mark as touched on blur', () => {
    const input = fixture.nativeElement.querySelector('input') as HTMLInputElement;

    input.dispatchEvent(new Event('blur'));

    expect(hostComponent.form.controls.email.touched).toBeTrue();
  });

  it('should update disabled state', () => {
    hostComponent.form.controls.email.disable();
    fixture.detectChanges();

    const input = fixture.nativeElement.querySelector('input') as HTMLInputElement;

    expect(input.disabled).toBeTrue();
  });
});
