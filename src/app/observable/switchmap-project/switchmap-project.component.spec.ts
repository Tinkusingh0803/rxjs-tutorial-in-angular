import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchmapProjectComponent } from './switchmap-project.component';

describe('SwitchmapProjectComponent', () => {
  let component: SwitchmapProjectComponent;
  let fixture: ComponentFixture<SwitchmapProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchmapProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchmapProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
