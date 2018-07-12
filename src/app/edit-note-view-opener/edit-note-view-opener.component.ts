import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EditNoteViewComponent } from '../edit-note-view/edit-note-view.component';
import { ActivatedRoute } from '@angular/router';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-edit-note-view-opener',
  templateUrl: './edit-note-view-opener.component.html',
  styleUrls: ['./edit-note-view-opener.component.css']
})
export class EditNoteViewOpenerComponent implements OnInit {

  constructor(private dialog: MatDialog,
    private activatedRoute: ActivatedRoute,
    private routerService: RouterService) {
    const noteId = +this.activatedRoute.snapshot.paramMap.get('noteId');
    console.log('from opener', noteId);
    this.dialog.open(EditNoteViewComponent, {
      data: {
        noteId: noteId
      }
    })
      .afterClosed().subscribe(result => {
        this.routerService.back();
      });
  }



  ngOnInit() {
  }

}
