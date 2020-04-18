import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-view-event',
  templateUrl: './view-event.page.html',
  styleUrls: ['./view-event.page.scss'],
})
export class ViewEventPage implements OnInit {
  @Input('item')item:any;
url = '../../assets/images/cover.jpg' ;
  constructor(
    private modal: ModalController
  ) { }

  ngOnInit() {
  }
close(){
  this.modal.dismiss();
}
}
