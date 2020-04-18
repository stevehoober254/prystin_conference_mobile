import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HideComponentService } from '../services/hide-component.service';
import { LoadersService } from '../services/loaders.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(
    private navCtrl: Router,
    private service: HideComponentService,
    private avatar: LoadersService
  ) { }

  ngOnInit() {
  }


  notification(){
    this.service.hideTabs = true ;
    this.navCtrl.navigate(['tabs/notification']);
  }
}
