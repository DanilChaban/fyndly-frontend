import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlMenuItemComponent } from '@ui/fl-menu/components/fl-menu-item/fl-menu-item.component';

describe('FlMenuItemComponent', () => {
  let component: FlMenuItemComponent;
  let fixture: ComponentFixture<FlMenuItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlMenuItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FlMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
