import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SysComponent } from 'src/app/sys/sys.component';
import { HrComponent } from 'src/app/hr/hr.component';
import { LoginComponent } from 'src/app/sys/login/login.component';

const route: Routes = [
  { path: '', component:LoginComponent  },
  { path: 'hr', component:HrComponent  },
  { path: 'sys', component:SysComponent  }
];
@NgModule({
  imports:[RouterModule.forRoot(route) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}