import {Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addtarget',
  templateUrl: './addtarget.component.html',
  styleUrls: ['./addtarget.component.scss']
})
export class AddtargetComponent implements OnInit {
	@Input() settings: any;

  	constructor() { }

	ngOnInit() {
	}

}
