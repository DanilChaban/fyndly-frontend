import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateHeaderProfileComponent } from '@private/components/common/header/private-header-profile/private-header-profile.component';

describe('PrivateHeaderProfileComponent', () => {
  let component: PrivateHeaderProfileComponent;
  let fixture: ComponentFixture<PrivateHeaderProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivateHeaderProfileComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PrivateHeaderProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
