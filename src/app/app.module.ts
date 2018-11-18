import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';

import { ConversionService } from './conversion.service';


import { AppComponent } from './app.component';
import { DrawingComponent } from './drawing/drawing.component';
import { AngleComponent } from './angle/angle.component';
import { AngleDataComponent } from './angle-data/angle-data.component';


@NgModule({
  declarations: [
    AppComponent,
    DrawingComponent,
    AngleComponent,
    AngleDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    DecimalPipe,
    ConversionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
