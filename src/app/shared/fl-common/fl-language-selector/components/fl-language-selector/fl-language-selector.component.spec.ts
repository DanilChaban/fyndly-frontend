import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlLanguageSelectorComponent } from '@common/fl-language-selector/components/fl-language-selector/fl-language-selector.component';

describe('FlLanguageSelectorComponent', () => {
  let component: FlLanguageSelectorComponent;
  let fixture: ComponentFixture<FlLanguageSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlLanguageSelectorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FlLanguageSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
