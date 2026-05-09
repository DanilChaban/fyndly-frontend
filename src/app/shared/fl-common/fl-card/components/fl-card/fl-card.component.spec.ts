import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlCardComponent } from '@common/fl-card/components/fl-card/fl-card.component';

describe('FlCardComponent', () => {
  let component: FlCardComponent;
  let fixture: ComponentFixture<FlCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FlCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
