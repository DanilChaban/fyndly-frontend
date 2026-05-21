import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlCardHeaderComponent } from '@common/fl-card/components/fl-card-header/fl-card-header.component';

describe('FlCardHeaderComponent', () => {
  let component: FlCardHeaderComponent;
  let fixture: ComponentFixture<FlCardHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlCardHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FlCardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
