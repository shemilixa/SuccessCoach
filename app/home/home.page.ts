import { Component, Injectable, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
class myHTTPService {
  constructor(private http: HttpClient) {}  
  
  getConfig(configUrl) {
    return this.http.get(configUrl);
  }
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [myHTTPService],
})

export class HomePage  {
  nameprogect: any = {} ;
  settings: any = {};
  items: any = [];

  constructor(
    private myService: myHTTPService,
    private database: DatabaseService
  ) { } 

  ngOnInit() {
    /*this.myService.getConfig('assets/data/settings.main/sttings.json').subscribe(data=> this.settings = data);     
    this.myService.getConfig('assets/data/name.json').subscribe(data=> this.nameprogect = data); 
    this.myService.getConfig('assets/data/home.page/data.json').subscribe(data=> this.items = data); */
    
    
  }
  ngDoCheck() {

  }

  

}