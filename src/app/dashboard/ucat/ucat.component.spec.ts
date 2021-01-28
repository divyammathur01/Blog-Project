import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UcatComponent } from './ucat.component';

describe('UcatComponent', () => {
  let component: UcatComponent;
  let fixture: ComponentFixture<UcatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UcatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UcatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
