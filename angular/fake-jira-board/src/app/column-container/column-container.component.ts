import { Component, OnInit, Output } from '@angular/core';
import { DataService } from '../data-service.service';

@Component({
  selector: 'app-column-container',
  templateUrl: './column-container.component.html',
  styleUrls: ['./column-container.component.css']
})
export class ColumnContainerComponent implements OnInit {
  columns: number[];
  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.columns = this.dataService.columns;
    this.dataService.assignColumnData();
  }
}
