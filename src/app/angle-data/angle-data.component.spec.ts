import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngleDataComponent } from './angle-data.component';

describe('AngleDataComponent', () => {
  let component: AngleDataComponent;
  let fixture: ComponentFixture<AngleDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngleDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngleDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
