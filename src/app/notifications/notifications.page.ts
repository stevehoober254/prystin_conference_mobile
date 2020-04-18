import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { HideComponentService } from '../services/hide-component.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {
notices = [1,2,3,4,5,6,7,8,9,9,10];
  constructor(
    private location: Location,
    private service: HideComponentService
  ) {
    this.service.hideTabs = true;
  }

  ngOnInit() {
  }


  back() {
    this.service.hideTabs = false ;
    this.location.back();
  }
}
