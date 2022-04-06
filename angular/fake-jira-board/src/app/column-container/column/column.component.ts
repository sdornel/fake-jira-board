import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { DataService } from 'src/app/data-service.service';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit {
  @Input() column: number;
  columnBoxes: number[] = [];
  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    switch(this.column) {
      case (1):
        this.subscribeToCol1Changes();
      break;
      case (2):
        this.subscribeToCol2Changes();
      break;
      case (3):
        this.subscribeToCol3Changes();
      break;
    }
  }

  moveItem(direction, boxNum, column) {
    this.dataService.moveItem(direction, boxNum, column);
  }

  subscribeToCol1Changes() {
    this.dataService.column1$().subscribe(col => {
      this.columnBoxes = col;
    });
  }

  subscribeToCol2Changes() {
    this.dataService.column2$().subscribe(col => {
      this.columnBoxes = col;
    });
  }

  subscribeToCol3Changes() {
    this.dataService.column3$().subscribe(col => {
      this.columnBoxes = col;
    });
  }

}
