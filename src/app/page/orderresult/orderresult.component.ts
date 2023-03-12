import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-orderresult',
  templateUrl: './orderresult.component.html',
  styleUrls: ['./orderresult.component.scss']
})
export class OrderresultComponent {
  constructor(private dialogRef: MatDialogRef<OrderresultComponent>) {}
  close() {
    this.dialogRef.close();
  }
}
