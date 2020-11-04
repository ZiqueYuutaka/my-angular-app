import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HexDashComponent } from './hex-dash.component';

describe('HexDashComponent', () => {
  let component: HexDashComponent;
  let fixture: ComponentFixture<HexDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HexDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HexDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
