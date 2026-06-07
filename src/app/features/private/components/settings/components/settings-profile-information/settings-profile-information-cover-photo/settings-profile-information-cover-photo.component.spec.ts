import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsProfileInformationCoverPhotoComponent } from '@settings/components/settings-profile-information/settings-profile-information-cover-photo/settings-profile-information-cover-photo.component';

describe('SettingsProfileInformationCoverPhotoComponent', () => {
  let component: SettingsProfileInformationCoverPhotoComponent;
  let fixture: ComponentFixture<SettingsProfileInformationCoverPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingsProfileInformationCoverPhotoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SettingsProfileInformationCoverPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
