
import { Component, OnInit } from '@angular/core';
//import { HTTP } from '@ionic-native/http/ngx';
//import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
//import { map } from 'rxjs/operator/map';

//import {Observable} from 'rxjs';
//import { map } from 'rxjs/operators';
//import 'rxjs/add/operator/map'; 



@Component({
  selector: 'app-day',
  templateUrl: './day.page.html',
  styleUrls: ['./day.page.scss'],
})
export class DayPage implements OnInit {
 getData_s:object={};
 constructor(private http: HttpClient) { 

 }
 // constructor(private http: HTTP) {}


  configUrl = 'assets/data/data.json';

  getConfig() {
    this.http.get(this.configUrl).subscribe(function(data){
      console.log(data);
      //getData(data);
      return data;
    });  
    
    //return answer;
  }

  getData(data){
    this.getData_s = data;
  }

 

  //console.dir();

  ngOnInit() {
  }

   public form = [
      { val: 'Pepperoni', isChecked: true },
      { val: 'Sausage', isChecked: true },
      { val: 'Mushroom', isChecked: true }
    ];

  dayData = [
  	{
  		'date': {
  			'hour': '06',
  			'minutes': '00',
  		},
  		'text': 'Подъем Чемпиона!',
  		'url': '',
  		'active': 'checked',
  	},
  	{
  		'date': {
  			'hour': '09',
  			'minutes': '00',
  		},
  		'text': 'Успешные Переговоры!',
  		'url': '',
  		'active': 'checked',
  	},
  	{
  		'date': {
  			'hour': '10',
  			'minutes': '00',
  		},
  		'text': 'Четкое Собрание!',
  		'url': '',
  		'active': 'checked',
  	},
  	{
  		'date': {
  			'hour': '13',
  			'minutes': '00',
  		},
  		'text': 'Яркий Обед!',
  		'url': '',
  		'active': 'checked',
  	},
  	{
  		'date': {
  			'hour': '15',
  			'minutes': '00',
  		},
  		'text': 'Удачная Встреча!',
  		'url': '',
  		'active': '',
  	},
    {
      'date': {
        'hour': '16',
        'minutes': '00',
      },
      'text': 'Собрание Победителей!',
      'url': '',
      'active': '',
    },
  	{
  		'date': {
  			'hour': '17',
  			'minutes': '00',
  		},
  		'text': 'Расслабление после Успешного дня!',
  		'url': '',
  		'active': '',
  	},
  	{
  		'date': {
  			'hour': '18',
  			'minutes': '00',
  		},
  		'text': 'Тренировка Чемпионов!',
  		'url': '',
  		'active': '',
  	},
  	{
  		'date': {
  			'hour': '19',
  			'minutes': '30',
  		},
  		'text': 'Время с Семьей!',
  		'url': '',
  		'active': '',
  	},
  	{
  		'date': {
  			'hour': '21',
  			'minutes': '00',
  		},
  		'text': 'Планирование Великого дня!',
  		'url': '',
  		'active': '',
  	},    
    {
      'date': {
        'hour': '21',
        'minutes': '00',
      },
      'text': 'Счастливый Сон Героя!',
      'url': '',
      'active': '',
    },
  ];

  addTarget(){
    this.getConfig();

  	console.log(this.getData_s);
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
