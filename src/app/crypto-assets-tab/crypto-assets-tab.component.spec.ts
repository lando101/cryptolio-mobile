import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoAssetsTabComponent } from './crypto-assets-tab.component';

describe('CryptoAssetsTabComponent', () => {
  let component: CryptoAssetsTabComponent;
  let fixture: ComponentFixture<CryptoAssetsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CryptoAssetsTabComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoAssetsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
