import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Note } from '../note';
import { AuthenticationService } from '../services/authentication.service';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/do';

@Injectable()
export class NotesService {
  notes: Array<Note>;
  notesSubject: BehaviorSubject<Array<Note>>;
  token: any;
  constructor(private http: HttpClient,
    private authService: AuthenticationService) {
    this.notes = [];
    this.notesSubject = new BehaviorSubject(this.notes);
    this.fetchNotesFromServer();
  }

  fetchNotesFromServer() {
    this.token = this.authService.getBearerToken();
    return this.http.get<Array<Note>>('http://localhost:3000/api/v1/notes', {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`)
    }).subscribe(notes => {
      this.notes = notes;
      this.notesSubject.next(this.notes);
    }, err => {
    });
  }

  getNotes(): Observable<Array<Note>> {
    return this.notesSubject.catch((error: HttpErrorResponse) => {
      console.error('An error occurred:', error.error);
      return Observable.throw(error);
    });
  }


  addNote(note: Note): Observable<Note> {
    return this.http.post<Note>('http://localhost:3000/api/v1/notes', note, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`)
    }).do(addNote => {
      this.notes.push(addNote);
      this.notesSubject.next(this.notes);
    }).catch((error: HttpErrorResponse) => {
      console.error('An error occurred:', error.error);
      return Observable.throw(error);
    });
  }

  getNoteById(noteId) {
    const getNote = this.notes.find(note => note.id === noteId);
    return Object.assign({}, getNote);
  }

  editNote(note): Observable<Note> {
    return this.http.put<Note>(`http://localhost:3000/api/v1/notes/${note.id}`, note, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`)
    }).do(editedNote => {
      const editNote = this.notes.find(note1 => note.id === editedNote.id);
      Object.assign(editNote, editedNote);
      this.notesSubject.next(this.notes);
    }).catch((error: HttpErrorResponse) => {
      console.error('An error occurred:', error.error);
      return Observable.throw(error);
    });
  }


}
