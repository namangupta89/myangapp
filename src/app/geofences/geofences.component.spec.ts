import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeofencesComponent } from './geofences.component';

describe('GeofencesComponent', () => {
  let component: GeofencesComponent;
  let fixture: ComponentFixture<GeofencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeofencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeofencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
