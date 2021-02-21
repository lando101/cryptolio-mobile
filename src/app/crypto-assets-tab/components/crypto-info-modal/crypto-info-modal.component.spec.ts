import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoInfoModalComponent } from './crypto-info-modal.component';

describe('CryptoInfoModalComponent', () => {
  let component: CryptoInfoModalComponent;
  let fixture: ComponentFixture<CryptoInfoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CryptoInfoModalComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoInfoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
