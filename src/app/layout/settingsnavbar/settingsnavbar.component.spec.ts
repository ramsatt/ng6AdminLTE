import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsnavbarComponent } from './settingsnavbar.component';

describe('SettingsnavbarComponent', () => {
  let component: SettingsnavbarComponent;
  let fixture: ComponentFixture<SettingsnavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsnavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
