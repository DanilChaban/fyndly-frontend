import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateHeaderSearchComponent } from '@private/components/common/header/private-header-search/private-header-search.component';

describe('PrivateHeaderSearchComponent', () => {
  let component: PrivateHeaderSearchComponent;
  let fixture: ComponentFixture<PrivateHeaderSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivateHeaderSearchComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PrivateHeaderSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
