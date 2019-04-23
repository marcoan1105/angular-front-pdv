import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SincronizerComponent } from './sincronizer.component';

describe('SincronizerComponent', () => {
  let component: SincronizerComponent;
  let fixture: ComponentFixture<SincronizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SincronizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SincronizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
