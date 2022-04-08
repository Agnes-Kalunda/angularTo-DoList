import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDo.HtmlComponent } from './to-do.html.component';

describe('ToDo.HtmlComponent', () => {
  let component: ToDo.HtmlComponent;
  let fixture: ComponentFixture<ToDo.HtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDo.HtmlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDo.HtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
