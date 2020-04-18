import { Component } from '@angular/core';
import { HideComponentService } from '../services/hide-component.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  selected = 'agenda' ;
  hideHeader = false ;
  agenda= ['Registration and Breakfast','Opening Remarks','Presentations','Music performance']

  constructor(
   private service: HideComponentService,
   private navCtrl: Router 
  ) {
    this.service.hideTabs = false ;
  }
  orderChange(event){
    console.log(event.detail);
  }
  expand(){
    let element = document.getElementById('bod');
    element.style.top = 0 + 'px' ;
    element.style.borderTopLeftRadius = 0 + 'px' ;
    element.style.borderTopRightRadius = 0 + 'px' ;
    this.hideHeader = true ;
  }
  compress(){
    let element = document.getElementById('bod');
    element.style.top = 30 + '%' ;
    element.style.borderTopLeftRadius = 30 + 'px' ;
    element.style.borderTopRightRadius = 30 + 'px' ;
    this.hideHeader = false ;
  }
  notification(){
    this.service.hideTabs = true ;
    this.navCtrl.navigate(['tabs/notification']);
  }

 
 
}
