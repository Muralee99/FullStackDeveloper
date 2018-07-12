/*import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

}
*/

import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../note';
import { NotesService } from '../services/notes.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  errorMessage = '';
  note: Note = new Note();
  public submitMessage: string;
  notes: Array<Note> = [];
  constructor(private notesService: NotesService) { }

  ngOnInit() {
    this.notesService.getNotes().subscribe(
      data => this.notes = data,
      err => {
        console.log('dashboard component error occured');
        if (err.status === '403') {
          this.submitMessage = err.error.message;
        }else if (err.status === '404') {
          this.submitMessage = err.error.message;
        }else {
          this.submitMessage = err.error.message;
        }
      }
    );
  }

  takeNotes() {
    if (this.note.title === '' || this.note.text === '') {
      this.submitMessage = 'Title and Text both are required fields';
      return;
    }

    this.notes.push(this.note);
    this.notesService.addNote(this.note).subscribe(
      data => { },
      errorMessage => this.submitMessage = errorMessage.message
    );

    this.note = new Note();
    console.log(this.notes);
  }

}
