import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NotesService } from '../services/notes.service';
import { Note } from '../note';

@Component({
  selector: 'app-edit-note-view',
  templateUrl: './edit-note-view.component.html',
  styleUrls: ['./edit-note-view.component.css']
})
export class EditNoteViewComponent implements OnInit {
  note: Note;
  constructor(private dialogRef: MatDialogRef<EditNoteViewComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private noteService: NotesService) {

  }

  ngOnInit() {
    this.note = this.noteService.getNoteById(this.data.noteId);
  }

  editNote() {
    this.noteService.editNote(this.note).subscribe(editNote => {
      this.dialogRef.close();
    });
  }

}

