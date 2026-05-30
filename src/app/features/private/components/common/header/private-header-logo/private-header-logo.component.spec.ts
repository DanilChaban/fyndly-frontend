import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateHeaderLogoComponent } from '@private/components/common/header/private-header-logo/private-header-logo.component';

describe('PrivateHeaderLogoComponent', () => {
  let component: PrivateHeaderLogoComponent;
  let fixture: ComponentFixture<PrivateHeaderLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivateHeaderLogoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PrivateHeaderLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
