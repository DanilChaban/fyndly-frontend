import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlCardTitleComponent } from '@common/fl-card/components/fl-card-title/fl-card-title.component';

describe('FlCardTitleComponent', () => {
  let component: FlCardTitleComponent;
  let fixture: ComponentFixture<FlCardTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlCardTitleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FlCardTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
