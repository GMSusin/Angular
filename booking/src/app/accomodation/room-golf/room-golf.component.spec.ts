import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomGolfComponent } from './room-golf.component';

describe('RoomGolfComponent', () => {
  let component: RoomGolfComponent;
  let fixture: ComponentFixture<RoomGolfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomGolfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomGolfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
