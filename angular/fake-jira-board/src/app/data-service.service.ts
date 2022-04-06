import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  column1Ref: BehaviorSubject<Array<number>>;
  column2Ref: BehaviorSubject<Array<number>>;
  column3Ref: BehaviorSubject<Array<number>>;
  columns: Array<number> = [1, 2, 3];
  constructor() { }

  assignColumnData() {
    this.column1Ref = new BehaviorSubject([1, 2, 3]);
    this.column2Ref = new BehaviorSubject([4, 5]);
    this.column3Ref = new BehaviorSubject([]);
  }

  moveItem(direction, boxNum, colNum) {
    let addToDifferentColumn;
    if (direction === 'back' && colNum > 1) {
        if (colNum === 2) {
          addToDifferentColumn = this.column2.splice(this.column2.indexOf(boxNum), 1);
          this.column1 = [...this.column1, addToDifferentColumn[0]];
        } else if (colNum === 3) {
          addToDifferentColumn = this.column3.splice(this.column3.indexOf(boxNum), 1);
          this.column2 = [...this.column2, addToDifferentColumn[0]];
        }
    } else if (direction === 'forward' && colNum < 3) {
        if (colNum === 1) {
          addToDifferentColumn = this.column1.splice(this.column1.indexOf(boxNum), 1);
          this.column2 = [...this.column2, addToDifferentColumn[0]];
        } else if (colNum === 2) {
          addToDifferentColumn = this.column2.splice(this.column2.indexOf(boxNum), 1);
          this.column3 = [...this.column3, addToDifferentColumn[0]];
        }
    }
  }

  get column1() {
    return this.column1Ref.value;
  }

  set column1(col) {
    this.column1Ref.next(col);
  }

  column1$() {
    return this.column1Ref.asObservable();
  }

  get column2() {
    return this.column2Ref.value;
  }

  set column2(col) {
    this.column2Ref.next(col);
  }

  column2$() {
    return this.column2Ref.asObservable();
  }

  get column3() {
    return this.column3Ref.value;
  }

  set column3(col) {
    this.column3Ref.next(col);
  }

  column3$() {
    return this.column3Ref.asObservable();
  }

}
