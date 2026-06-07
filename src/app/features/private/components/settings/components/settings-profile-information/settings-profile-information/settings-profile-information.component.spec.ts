import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SettingsProfileInformationComponent } from '@settings/components/settings-profile-information/settings-profile-information/settings-profile-information.component';

describe('SettingsProfileInformationComponent', () => {
  let component: SettingsProfileInformationComponent;
  let fixture: ComponentFixture<SettingsProfileInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingsProfileInformationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SettingsProfileInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
