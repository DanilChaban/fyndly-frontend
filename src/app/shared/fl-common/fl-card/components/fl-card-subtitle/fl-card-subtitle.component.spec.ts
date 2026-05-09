import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlCardSubtitleComponent } from '@common/fl-card/components/fl-card-subtitle/fl-card-subtitle.component';

describe('FlCardSubtitleComponent', () => {
  let component: FlCardSubtitleComponent;
  let fixture: ComponentFixture<FlCardSubtitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlCardSubtitleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FlCardSubtitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
