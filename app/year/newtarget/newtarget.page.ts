import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { File } from '@ionic-native/file/ngx';

@Component({
  selector: 'app-newtarget',
  templateUrl: './newtarget.page.html',
  styleUrls: ['./newtarget.page.scss'],
})
export class NewtargetPage implements OnInit {

  constructor(
  	public navCtrl: NavController,
  	private file: File,
  ) { }

  ngOnInit() {
  }

  goBack() {
    this.navCtrl.goBack();
  }

  addNewTarget(){
  	let data = {
  			"test": "test"
  		}
  	;

  	//console.log(this.File.resolveLocalFilesystemUrl);

  	//this.file.writeFile(this.file.dataDirectory, 'test.json', 'hello,world,', {replace: true});
  	this.file.createFile('assets/data/year.page/', 'test.json', true);


  }

}
