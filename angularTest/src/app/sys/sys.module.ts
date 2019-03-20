import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { SysComponent } from './sys.component';
import { AgGridModule } from 'ag-grid-angular';
import { FotterRowComponent } from './fotter-row/fotter-row.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../common/routing/app-routing/app-routing.module';
import { DemoMaterialModule } from '../common/shared/material.module';
import { LoginPipe } from './login/login.pipe';
import { FormsModule } from '@angular/forms';
import { AaaComponent } from './aaa/aaa.component';

@NgModule({

  declarations: [
    LoginComponent,
    HeaderMenuComponent,
    SysComponent,
    FotterRowComponent,
    SideMenuComponent,
    LoginPipe,
    AaaComponent
   ],
  imports: [
    CommonModule
    ,AgGridModule.withComponents([])
    ,DemoMaterialModule
    ,RouterModule
    ,AppRoutingModule
    ,FormsModule
  ],
  exports:[ LoginComponent,
    HeaderMenuComponent,
    SysComponent,FotterRowComponent,SideMenuComponent,AaaComponent]
})
export class SysModule { }
