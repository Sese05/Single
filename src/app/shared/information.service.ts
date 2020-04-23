import { Injectable } from '@angular/core';
//import { AngularFireList, AngularFireObject,AngularFireDatabase } from '@angular/fire/database';
import { AngularFireList, AngularFireObject,AngularFireDatabase } from '@angular/fire/database';
import { Information } from './../../../../Shared/Information';





@Injectable({
  providedIn: 'root'
})
export class InformationService {

InfoListiRef: AngularFireList<any>;
InfoRef: AngularFireObject<any> ;
  


  constructor(private db: AngularFireDatabase) { }
  //Create 
  createBook(db : Information){
    this.InfoListiRef = this.db.list('/information');
    return this.InfoListiRef.push({
      firstname: db.firstname,
      lastname: db.lastname,
      email: db.email,
      password: db.password,
      regnumber: db.regnumber,
      ppenumber: db.ppenumber
      


    })
  }
//Get Single
getBook(id: string){
  this.InfoRef = this.db.object('/information/' + id);
  return this.InfoRef;
}
//getting list
getBookList(){
  this.InfoListiRef = this.db.list('/information');
  return this.InfoListiRef;
}
// update Infomation
updateBook(id, db: Information){
  return this.InfoRef.update({
    firstname: db.firstname,
    lastname: db.lastname,
    email: db.email,
    password: db.password,
    regnumber: db.regnumber,
    ppenumber: db.ppenumber
  })
}
//Deleting Information
deleteBook(id:String){
  this.InfoRef = this.db.object('/information/' + id);
  this.InfoRef.remove();
}
}
