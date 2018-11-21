import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { HTTP } from '@ionic-native/http/ngx';
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  //private db: any;
  
  expenses: any = [];

  constructor(
    public http: HTTP,
    private sqlite: SQLite
  ) {

   this.sqlite = new SQLite();

    this.sqlite.create({
      name: 'db.db',
      location: 'default'
    }).then((db:SQLiteObject) => {
      //this.db = db;  

      db.executeSql('CREATE TABLE IF NOT EXISTS expense(rowid INTEGER PRIMARY KEY, date TEXT, type TEXT, description TEXT, amount INT)', [])
      .then(res => console.log('Executed SQL'))
      .catch(e => console.log(e));  

      db.executeSql('INSERT INTO expense VALUES(NULL,?,?,?,?)',['textttt','aaaa','rrrr',111]);


      db.executeSql('SELECT * FROM expense ', [])
        .then(res => {
          console.log(res);
          if(res.rows.length>0) {
            this.expenses = [];
            for(var i=0; i<res.rows.length; i++) {
              this.expenses.push({rowid:res.rows.item(i).rowid,date:res.rows.item(i).date,type:res.rows.item(i).type,description:res.rows.item(i).description,amount:res.rows.item(i).amount})
            }
            console.log(this.expenses);
          }
        });

       //console.log(res.rows);
       console.log(db);

    }).catch((error) => {
      console.log(error);
    }); 

  }

  ngOnInit() {

  }

  ngDoCheck() {
    //console.log(this.sqlite);
  }

  test(){

  /*return new Promise ((resolve, reject) => {
    this.db.executeSql('SELECT * FROM section',[]).then((data) =>{
      let section =[];
      if (data.rows.length > 0) {
        for (var i =0; i < data.rows.length; i++) {
          section.push({
            master_id: data.rows.item(i).master_id,
            address: data.rows.item(i).address
          });
        }
      }
      console.log(section);
    resolve(section);
    }, (error) => {
      reject(error);
    })
  });*/






  /*this.sqlite.create({
    name: 'data.db',
    location: 'default' // the location field is required
  })
  .then((db) => {

    console.log(db);

    db.executeSql('select * from section',{})
      .then((data) => {
        console.log(data)
        console.log(data.rows.length);
        var auth = data.rows.item;
        console.log(auth)
      })
      .catch(e => {
        console.log(e);
      })
  })
  .catch(error =>{
    console.error(error);
  });*/

    //console.log('sdadasd');
  }

}
