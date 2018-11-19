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
  selector: 'app-day',
  templateUrl: './day.page.html',
  styleUrls: ['./day.page.scss'],
  providers: [myHTTPService],
})
export class DayPage implements OnInit {
  settings: any = {};
  dayData: any = [];

  constructor(private myService: myHTTPService){} 

  ngOnInit() {
    this.myService.getConfig('assets/data/settings.main/sttings.json').subscribe(data=> this.settings = data); 
    this.myService.getConfig('assets/data/day.page/data.json').subscribe(data=> this.dayData = data); 
  }

  addTarget(){    
    this.modalTarget()
  }

  editTarget(){ 
    this.modalTarget()    
  }

  modalTarget(){
    document.getElementById('blockNoActive').style.width="100%";
    let bockAddTarget = document.getElementById('addTarget');
    bockAddTarget.className = "addTargetOn animated bounceInUp";

    let blockNoActive = document.getElementById('blockNoActive');

    blockNoActive.addEventListener('click', function(event){
        bockAddTarget.className = "addTargetOff bounceInDown";
        document.getElementById('blockNoActive').style.width="";      
    });
  }




}
