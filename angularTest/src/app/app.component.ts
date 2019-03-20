import { Component } from '@angular/core';
import { SysService } from './common/svc/sys.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  title = 'angularTest';
  sysService:SysService;
   constructor(public http:HttpClient) {
    this.sysService=new SysService(http);
   }
  
}
