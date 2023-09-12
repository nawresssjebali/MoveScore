import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixFacComponent } from './choix-fac.component';

describe('ChoixFacComponent', () => {
  let component: ChoixFacComponent;
  let fixture: ComponentFixture<ChoixFacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoixFacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoixFacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
