import { Component, Injectable, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import { File } from '@ionic-native/file/ngx';
import { DatabaseService } from '../database.service';

@Injectable()
class myHTTPService {
  constructor(
  	private http: HttpClient
  ) {}  
 
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

  constructor(
    private database: DatabaseService,
    private myService: myHTTPService,
    private http: HTTP,
    private file: File,
  	public navCtrl: NavController
  ){} 

	ngOnInit() {
    this.database.test();

    //this.myService.getConfig('assets/data/settings.main/sttings.json').subscribe(data=> this.settings = data); 
    //this.myService.getConfig('assets/data/year.page/data.json').subscribe(data=> this.yearData = data); 
    //console.log(this.http.get('assets/data/year.page/data.json'));
    /*this.http.get('assets/data/year.page/data.json', {}, {})
     .then((data) => {
        this.yearData = data;
        console.log(data);
     })
     .catch((error) => {
         console.log(error);
     });*/

    // this.file.readAsText(this.file.applicationDirectory + "www/assets/data/year.page/", "data.json").then(_ => console.log('Directory exists')).catch(err => console.log('D'));


  }

  goBack() {
    this.navCtrl.goBack();
  }

  transition(url){
  	this.navCtrl.navigateRoot(url);
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
