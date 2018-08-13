import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooternavbarComponent } from './footernavbar.component';

describe('FooternavbarComponent', () => {
  let component: FooternavbarComponent;
  let fixture: ComponentFixture<FooternavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooternavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooternavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
