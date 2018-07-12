import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { Note } from './note';
import { NotesService } from './services/notes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  /*errorMessage = '';

  note: Note = new Note();
  notes: Array<Note> = [];

  constructor(private notesService: NotesService) { }

  ngOnInit() {
    this.notesService.getNotes().subscribe(
      data => this.notes = data,
      errorMessage => this.errorMessage = errorMessage.message
    );
  }

  takeNote() {
    if (this.note.title === '' || this.note.text === '') {
      this.errorMessage = 'Title and Text both are required fields';
      return;
    }

    this.notes.push(this.note);
    this.notesService.addNote(this.note).subscribe(
      data => { },
      errorMessage => this.errorMessage = errorMessage.message
    );

    this.note = new Note();
    console.log(this.notes);
  }*/
}
