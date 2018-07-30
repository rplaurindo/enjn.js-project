import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnjnComponent } from './enjn.component';

describe('EnjnComponent', () => {
  let component: EnjnComponent;
  let fixture: ComponentFixture<EnjnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnjnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnjnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
