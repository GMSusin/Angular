import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomFoxtrotComponent } from './room-foxtrot.component';

describe('RoomFoxtrotComponent', () => {
  let component: RoomFoxtrotComponent;
  let fixture: ComponentFixture<RoomFoxtrotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomFoxtrotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomFoxtrotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
