import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomCharlieComponent } from './room-charlie.component';

describe('RoomCharlieComponent', () => {
  let component: RoomCharlieComponent;
  let fixture: ComponentFixture<RoomCharlieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomCharlieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomCharlieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
