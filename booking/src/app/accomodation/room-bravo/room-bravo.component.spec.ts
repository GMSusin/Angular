import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomBravoComponent } from './room-bravo.component';

describe('RoomBravoComponent', () => {
  let component: RoomBravoComponent;
  let fixture: ComponentFixture<RoomBravoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomBravoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomBravoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
