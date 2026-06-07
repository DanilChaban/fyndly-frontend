import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsProfileInformationProfileComponent } from '@settings/components/settings-profile-information/settings-profile-information-profile/settings-profile-information-profile.component';

describe('SettingsProfileInformationProfileComponent', () => {
  let component: SettingsProfileInformationProfileComponent;
  let fixture: ComponentFixture<SettingsProfileInformationProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingsProfileInformationProfileComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SettingsProfileInformationProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
