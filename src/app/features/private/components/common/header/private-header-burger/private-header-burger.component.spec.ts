import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrivateHeaderBurgerComponent } from '@private/components/common/header/private-header-burger/private-header-burger.component';

describe('PrivateHeaderBurgerComponent', () => {
  let component: PrivateHeaderBurgerComponent;
  let fixture: ComponentFixture<PrivateHeaderBurgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivateHeaderBurgerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PrivateHeaderBurgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
