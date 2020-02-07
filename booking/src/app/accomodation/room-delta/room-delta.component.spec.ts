import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomDeltaComponent } from './room-delta.component';

describe('RoomDeltaComponent', () => {
  let component: RoomDeltaComponent;
  let fixture: ComponentFixture<RoomDeltaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomDeltaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomDeltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
