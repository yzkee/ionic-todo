import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
 
@Component({
  selector: 'page-item-detail-page',
  templateUrl: 'item-detail-page.html'
})
export class ItemDetailPage {
 
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
 
  constructor(public navParams: NavParams){
 
  }
 
  ionViewDidLoad() {

    

  this.id = this.navParams.get('item').id;
  this.title = this.navParams.get('item').title;
  this.Name = this.navParams.get('item').Name;
  this.StartDate = this.navParams.get('item').StartDate;
  this.StartTime = this.navParams.get('item').StartTime;
  this.StartPoint = this.navParams.get('item').StartPoint;
  this.EndPoint = this.navParams.get('item').EndPoint;
  this.Remarks = this.navParams.get('item').Remarks;
  this.color = this.navParams.get('item').color;
  this.Completed = this.navParams.get('item').Completed;

  }
 
}