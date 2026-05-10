import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlMenuComponent } from '@ui/fl-menu/components/fl-menu/fl-menu.component';

describe('FlMenuComponent', () => {
  let component: FlMenuComponent;
  let fixture: ComponentFixture<FlMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlMenuComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FlMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
