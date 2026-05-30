import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateHeaderLogoutComponent } from '@private/components/common/header/private-header-logout/private-header-logout.component';

describe('PrivateHeaderLogoutComponent', () => {
  let component: PrivateHeaderLogoutComponent;
  let fixture: ComponentFixture<PrivateHeaderLogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivateHeaderLogoutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PrivateHeaderLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
