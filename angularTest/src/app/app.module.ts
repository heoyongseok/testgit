import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { HrComponent } from './hr/hr.component';
import { RouterModule  } from '@angular/router';
import { AppRoutingModule } from './common/routing/app-routing/app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SysModule } from './sys/sys.module';
import { DemoMaterialModule } from './common/shared/material.module';
import { MatNativeDateModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HrComponent
 

  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([]),
    HttpClientModule,RouterModule,AppRoutingModule,
    DemoMaterialModule, SysModule, MatNativeDateModule,
    BrowserAnimationsModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
