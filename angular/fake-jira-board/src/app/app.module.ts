import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ColumnContainerComponent } from './column-container/column-container.component';
import { ColumnComponent } from './column-container/column/column.component';
import { DataService } from './data-service.service';

@NgModule({
  declarations: [
    AppComponent,
    ColumnContainerComponent,
    ColumnComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
