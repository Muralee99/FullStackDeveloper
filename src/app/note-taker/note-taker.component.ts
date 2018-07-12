import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../note';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-note-taker',
  templateUrl: './note-taker.component.html',
  styleUrls: ['./note-taker.component.css']
})
export class NoteTakerComponent implements OnInit {
  note: Note = new Note();
  notes: Array<Note> = [];
  constructor(private notesService: NotesService) { }

  ngOnInit() {

  }

  takeNotes() {
    this.notes.push(this.note);
    this.notesService.addNote(this.note).subscribe(
      data => { },
      err => {
        const index: number = this.notes.findIndex(note => note.title === this.note.title);
        this.notes.splice(index, 1);
      }
    );
    this.note = new Note();
    console.log(this.note.title + ' ' + this.note.text);
  }

}
