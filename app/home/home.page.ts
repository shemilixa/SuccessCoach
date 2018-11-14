import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})

export class HomePage {
  items = [
  	{
  		'text': 'Твой успешный день',
  		'url': 'day',
  		'active': 'elementMenuActive',
  	},
  	{
  		'text': 'Твой успешный год',
  		'url': 'year',
  		'active': 'elementMenuActive',
  	},
  	{
  		'text': 'Выход из стресса',
  		'url': 'stress',
  		'active': 'elementMenuActive',
  	},
  	{
  		'text': 'Вдохновление на день',
  		'url': '',
  		'active': 'elementMenuNoActive',
  	},
  	{
  		'text': 'Бизнес решение',
  		'url': '',
  		'active': 'elementMenuNoActive',
  	},
  	{
  		'text': 'Питание',
  		'url': '',
  		'active': 'elementMenuNoActive',
  	},
  	{
  		'text': 'Общение',
  		'url': 'communication',
  		'active': 'elementMenuActive',
  	},
  ];

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }
}