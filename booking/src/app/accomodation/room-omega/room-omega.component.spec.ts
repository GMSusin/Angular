import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomOmegaComponent } from './room-omega.component';

describe('RoomOmegaComponent', () => {
  let component: RoomOmegaComponent;
  let fixture: ComponentFixture<RoomOmegaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomOmegaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomOmegaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
