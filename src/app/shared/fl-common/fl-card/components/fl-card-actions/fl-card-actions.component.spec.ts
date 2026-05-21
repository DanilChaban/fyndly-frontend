import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlCardActionsComponent } from '@common/fl-card/components/fl-card-actions/fl-card-actions.component';

describe('FlCardActionsComponent', () => {
  let component: FlCardActionsComponent;
  let fixture: ComponentFixture<FlCardActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlCardActionsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FlCardActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
