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
  selector: 'app-year',
  templateUrl: './year.page.html',
  styleUrls: ['./year.page.scss'],
  providers: [myHTTPService],
})
export class YearPage implements OnInit {
  settings: any = {};
  yearData: any = [];

  constructor(private myService: myHTTPService){} 

	ngOnInit() {
    this.myService.getConfig('assets/data/settings.main/sttings.json').subscribe(data=> this.settings = data); 
    this.myService.getConfig('assets/data/year.page/data.json').subscribe(data=> this.yearData = data); 
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
