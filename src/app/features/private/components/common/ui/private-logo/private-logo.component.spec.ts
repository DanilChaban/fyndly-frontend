import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateLogoComponent } from '@private/components/common/ui/private-logo/private-logo.component';

describe('PrivateLogoComponent', () => {
  let component: PrivateLogoComponent;
  let fixture: ComponentFixture<PrivateLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivateLogoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PrivateLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
