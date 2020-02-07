import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomAlfaComponent } from './room-alfa.component';

describe('RoomAlfaComponent', () => {
  let component: RoomAlfaComponent;
  let fixture: ComponentFixture<RoomAlfaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomAlfaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomAlfaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
