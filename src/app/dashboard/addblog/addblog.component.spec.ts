import { ComponentFixture, TestBed } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { AddblogComponent } from './addblog.component';

describe('AddblogComponent', () => {
  let component: AddblogComponent;
  let fixture: ComponentFixture<AddblogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddblogComponent ],
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule 
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
