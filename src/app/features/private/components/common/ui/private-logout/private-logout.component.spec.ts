import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateLogoutComponent } from '@private/components/common/ui/private-logout/private-logout.component';

describe('PrivateLogoutComponent', () => {
  let component: PrivateLogoutComponent;
  let fixture: ComponentFixture<PrivateLogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivateLogoutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PrivateLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
