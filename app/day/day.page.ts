import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day',
  templateUrl: './day.page.html',
  styleUrls: ['./day.page.scss'],
})
export class DayPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

   public form = [
      { val: 'Pepperoni', isChecked: true },
      { val: 'Sausage', isChecked: false },
      { val: 'Mushroom', isChecked: false }
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
  	console.log('добавление дела');
  }
}
