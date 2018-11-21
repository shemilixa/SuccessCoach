import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Platform } from '@ionic/angular';

import { Http } from '@angular/http';
import { Observable, of, throwError } from 'rxjs';
import { forkJoin } from 'rxjs';

//import { WindowService } from "windowservice";

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
 	private db: SQLiteObject;
  private isOpen: boolean;

  constructor(  	
  	private storage: SQLite,
  	protected platform : Platform,

  	private sqlitePorter: SQLitePorter,  	 
  	public http: Http,
  	private nativeStorage: NativeStorage,
  	//private windowService: WindowService
  ) { 

  	if (!this.isOpen) {
      this.storage = new SQLite();
      this.storage.create({ name: "dataBase.db", location: "default" }).then((db: SQLiteObject) => {
        this.db = db;
        db.executeSql("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, identification INTEGER, name TEXT, lastname text)", []);
        this.isOpen = true;
      }).catch((error) => {
        console.log(error);
      })
    }

  	
  }

	CreateUser(identification: number, name:string, lastname:string){
    return new Promise ((resolve, reject) => {
      let sql = "INSERT INTO users (identification, name, lastname) VALUES (?, ?, ?)";
      this.db.executeSql(sql, [identification, name, lastname]).then((data) =>{
        resolve(data);
      }, (error) => {
        reject(error);
      });
    });
  }

  GetAllUsers(){
    return new Promise ((resolve, reject) => {
      this.db.executeSql("SELECT * FROM section", []).then((data) => {
        let section = [];
        if (data.rows.length > 0) {
          for (var i = 0; i < data.rows.length; i++) {
            section.push({
              id: data.rows.item(i).id,
              url: data.rows.item(i).url,
              action: data.rows.item(i).action
            });            
          }          
        }
        resolve(section);
      }, (error) => {
        reject(error);
      })
    })
  }

  DeleteUser(idUser){
    
  }




  test(){

  	//console.log(this.myDevice);

  	console.log('sdadasd');
  }

}
