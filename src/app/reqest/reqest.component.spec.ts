import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqestComponent } from './reqest.component';

describe('ReqestComponent', () => {
  let component: ReqestComponent;
  let fixture: ComponentFixture<ReqestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReqestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReqestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
