import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNoteViewOpenerComponent } from './edit-note-view-opener.component';

describe('EditNoteViewOpenerComponent', () => {
  let component: EditNoteViewOpenerComponent;
  let fixture: ComponentFixture<EditNoteViewOpenerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditNoteViewOpenerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditNoteViewOpenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
