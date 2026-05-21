import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlToastComponent } from '@ui/fl-toast/component/fl-toast/fl-toast.component';

describe('FlToastComponent', () => {
  let component: FlToastComponent;
  let fixture: ComponentFixture<FlToastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlToastComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FlToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
