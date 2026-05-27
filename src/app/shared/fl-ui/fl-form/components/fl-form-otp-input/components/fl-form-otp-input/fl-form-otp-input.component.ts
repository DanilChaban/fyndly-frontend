import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  forwardRef,
  input,
  OnInit,
  QueryList,
  signal,
  ViewChildren,
} from '@angular/core';
import { NgClass } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatError, MatInput } from '@angular/material/input';
import { TranslocoPipe } from '@jsverse/transloco';
import { FlFormControlBase } from '@ui/abstract/fl-form-control-base/fl-form-control-base';

@Component({
  selector: 'fl-form-otp-input',
  imports: [NgClass, MatInput, MatError, TranslocoPipe],
  templateUrl: './fl-form-otp-input.component.html',
  styleUrl: './fl-form-otp-input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FlFormOtpInputComponent),
      multi: true,
    },
  ],
})
export class FlFormOtpInputComponent extends FlFormControlBase implements ControlValueAccessor, OnInit {
  length = input(6);

  @ViewChildren('otpInput')
  private inputs!: QueryList<ElementRef<HTMLInputElement>>;

  values = signal<string[]>(Array(this.length()).fill(''));

  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};

  ngOnInit(): void {
    this.markForCheckOnControlStatusChange();
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  writeValue(): void {
    const values = Array(this.length()).fill('');
    this.values.set(values);
  }

  onBlur(): void {
    this.onTouched();
    this.control().markAsTouched();
  }

  onInput(event: Event, index: number): void {
    const inputElement = event.target as HTMLInputElement;
    const value = inputElement.value.replace(/\D/g, '').slice(-1);

    inputElement.value = value;

    this.setValueAt(index, value);
    this.emitValue();

    if (value) {
      this.focusInput(index + 1);
    }
  }

  onKeyDown(event: KeyboardEvent, index: number): void {
    const inputElement = event.target as HTMLInputElement;

    if (event.key === 'Backspace' && !inputElement.value && index > 0) {
      this.setValueAt(index - 1, '');
      this.emitValue();
      this.focusInput(index - 1);
      return;
    }

    if (event.key === 'ArrowLeft') {
      this.focusInput(index - 1);
      return;
    }

    if (event.key === 'ArrowRight') {
      this.focusInput(index + 1);
    }
  }

  onPaste(event: ClipboardEvent): void {
    event.preventDefault();

    const pastedValue = event.clipboardData?.getData('text') ?? '';
    const digits = pastedValue.replace(/\D/g, '').slice(0, this.length()).split('');

    if (!digits.length) {
      return;
    }

    const values = Array(this.length()).fill('');

    digits.forEach((digit, index) => {
      values[index] = digit;
    });

    this.values.set(values);
    this.emitValue();

    this.focusInput(Math.min(digits.length, this.length() - 1));
  }

  private setValueAt(index: number, value: string): void {
    const values = [...this.values()];
    values[index] = value;
    this.values.set(values);
  }

  private emitValue(): void {
    this.onChange(this.values().join(''));
  }

  private focusInput(index: number): void {
    const input = this.inputs.get(index);

    if (!input) {
      return;
    }

    input.nativeElement.focus();
    input.nativeElement.select();
  }
}
