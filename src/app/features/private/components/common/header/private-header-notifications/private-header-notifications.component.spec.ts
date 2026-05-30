import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateHeaderNotificationsComponent } from '@private/components/common/header/private-header-notifications/private-header-notifications.component';

describe('PrivateHeaderNotificationsComponent', () => {
  let component: PrivateHeaderNotificationsComponent;
  let fixture: ComponentFixture<PrivateHeaderNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivateHeaderNotificationsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PrivateHeaderNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
