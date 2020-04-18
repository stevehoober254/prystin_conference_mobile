import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HideComponentService } from '../services/hide-component.service';
import { ModalController } from '@ionic/angular';
import { ViewEventPage } from '../view-event/view-event.page';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  active = "";
  thismonth = 'Jan';
  MonthIndex = 0;
  showSearchBar = false ;

  constructor(
    private navCtrl: Router,
    private service: HideComponentService,
    private modal: ModalController
  ) { 
   
    let now =  new Date().getMonth();
    this.MonthIndex = now ;
    this.thismonth = this.months[now];
    console.log(this.thismonth);
    this.active = this.thismonth ;
  }
  changedMonth(event){
    this.thismonth = event.detail.value ;
    console.log(event.detail);
  }


  notification() {
    this.service.hideTabs = true;
    this.navCtrl.navigate(['tabs/notification']);
  }
  async viewEnter(item){
    const md = await this.modal.create({
      component: ViewEventPage,
      componentProps: item
    });
    await md.present();
    }
  showSearch(){
    this.showSearchBar = !this.showSearchBar ;
  }
}
