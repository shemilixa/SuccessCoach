import { Component, Injectable, OnInit } from '@angular/core';
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
  items: object = [];

  constructor(private myService: myHTTPService) { } 

  ngOnInit() {
    this.myService.getConfig('assets/data/home/data.json').subscribe(data=> this.items = data); 
  }

}