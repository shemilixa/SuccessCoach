import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-day',
  templateUrl: './day.page.html',
  styleUrls: ['./day.page.scss'],
})
export class DayPage implements OnInit {

  constructor(
    public actionsheetCtrl: ActionSheetController
  ) { }

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
  		'text': 'Подъем',
  		'url': '',
  		'active': 'checked',
  	},
  	{
  		'date': {
  			'hour': '09',
  			'minutes': '00',
  		},
  		'text': 'Переговоры',
  		'url': '',
  		'active': 'checked',
  	},
  	{
  		'date': {
  			'hour': '10',
  			'minutes': '00',
  		},
  		'text': 'События',
  		'url': '',
  		'active': 'checked',
  	},
  	{
  		'date': {
  			'hour': '13',
  			'minutes': '00',
  		},
  		'text': 'Обед',
  		'url': '',
  		'active': 'checked',
  	},
  	{
  		'date': {
  			'hour': '15',
  			'minutes': '00',
  		},
  		'text': 'Встреча',
  		'url': '',
  		'active': '',
  	},
  	{
  		'date': {
  			'hour': '17',
  			'minutes': '00',
  		},
  		'text': 'Окончание рабочего дня',
  		'url': '',
  		'active': '',
  	},
  	{
  		'date': {
  			'hour': '18',
  			'minutes': '00',
  		},
  		'text': 'Басейн',
  		'url': '',
  		'active': '',
  	},
  	{
  		'date': {
  			'hour': '19',
  			'minutes': '30',
  		},
  		'text': 'Время с семьей',
  		'url': '',
  		'active': '',
  	},
  	{
  		'date': {
  			'hour': '21',
  			'minutes': '00',
  		},
  		'text': 'Планирование следующего дня',
  		'url': '',
  		'active': '',
  	},
  ];

  addTarget(){
  	//console.log('добавление дела');
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