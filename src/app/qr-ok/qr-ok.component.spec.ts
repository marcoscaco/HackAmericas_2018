import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QrOkComponent } from './qr-ok.component';

describe('QrOkComponent', () => {
  let component: QrOkComponent;
  let fixture: ComponentFixture<QrOkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrOkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QrOkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
