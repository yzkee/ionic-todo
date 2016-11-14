import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
 
@Component({
  selector: 'page-add-item-page',
  templateUrl: 'add-item-page.html'
})
export class AddItemPage {
 
   id;
    title;
    Name;
    StartDate;
    StartTime;
    StartPoint;
    EndPoint;
    Remarks;
    color;
    Completed ;
 
  constructor(public navCtrl: NavController, public view: ViewController) {
 
  }
 
  saveItem(){
 
    let newItem = {


    id : this.id,
    title : this.title,
    Name : this.Name,
    StartDate : this.StartDate,
    StartTime : this.StartTime,
    StartPoint : this.StartPoint,
    EndPoint : this.EndPoint,
    Remarks : this.Remarks,
    color : this.color,
    Completed  : this.Completed
    };
 
    this.view.dismiss(newItem);
 
  }
 
  close(){
    this.view.dismiss();
  }

   selectColor(color:string){
    this.color = color;
  }
 
}