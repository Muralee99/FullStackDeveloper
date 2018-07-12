import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../note';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-note-view',
  templateUrl: './note-view.component.html',
  styleUrls: ['./note-view.component.css']
})
export class NoteViewComponent implements OnInit {

  constructor(private notesService: NotesService) {
    this.notesService.getNotes().subscribe(
      data => this.notes = data,
      err => console.log(err)
    );
  }
  notes: Array<Note>;
  ngOnInit() {
  }

}
