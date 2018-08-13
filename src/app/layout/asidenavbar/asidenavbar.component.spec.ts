import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsidenavbarComponent } from './asidenavbar.component';

describe('AsidenavbarComponent', () => {
  let component: AsidenavbarComponent;
  let fixture: ComponentFixture<AsidenavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsidenavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsidenavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
