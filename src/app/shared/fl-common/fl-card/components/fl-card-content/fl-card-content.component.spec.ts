import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlCardContentComponent } from '@common/fl-card/components/fl-card-content/fl-card-content.component';

describe('FlCardContentComponent', () => {
  let component: FlCardContentComponent;
  let fixture: ComponentFixture<FlCardContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlCardContentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FlCardContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
