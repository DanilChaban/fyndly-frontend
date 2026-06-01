import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateSidenavComponent } from '@private/components/common/sidenav/private-sidenav/private-sidenav.component';

describe('PrivateSidenavComponent', () => {
  let component: PrivateSidenavComponent;
  let fixture: ComponentFixture<PrivateSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivateSidenavComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PrivateSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
