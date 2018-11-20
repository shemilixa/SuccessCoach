import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
	options: any = {
     name: 'dataBase.db',
     location: 'default',
     createFromLocation: 1
 }

	private db: SQLiteObject;


  constructor(private sqlite: SQLite) { 
  	 this.connectToDb();
  }

  private connectToDb():void {
    
     
     
 }

  

  test(){
  	console.log('sdadasd');
  }

}
