import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateContentHeaderComponent } from '@private/components/common/ui/private-content-header/private-content-header.component';

describe('PrivateContentHeaderComponent', () => {
  let component: PrivateContentHeaderComponent;
  let fixture: ComponentFixture<PrivateContentHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivateContentHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PrivateContentHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
