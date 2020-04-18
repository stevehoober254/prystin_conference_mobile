import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HideComponentService } from '../services/hide-component.service';
import { ModalController } from '@ionic/angular';
import { ViewEventPage } from '../view-event/view-event.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  questions = ['1', '2', '2', '2', '2', '2', '2', '2'];
  choices = ['1', '1', '1', '1'];
  checked = [] ;
  progress = [];
  constructor(
    private navCtrl: Router,
    private service: HideComponentService,
   
  ) {
    this.allFalse();
   }
allFalse(){
  this.checked = [];
  this.choices.forEach(item => {
    this.checked.push('false');
  });
}

  notification() {
    this.service.hideTabs = true;
    this.navCtrl.navigate(['tabs/notification']);
  }
  select(index){
    this.allFalse();
    this.checked[index] = true ;
  }

}
