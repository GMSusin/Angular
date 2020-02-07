import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomEchoComponent } from './room-echo.component';

describe('RoomEchoComponent', () => {
  let component: RoomEchoComponent;
  let fixture: ComponentFixture<RoomEchoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomEchoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomEchoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
