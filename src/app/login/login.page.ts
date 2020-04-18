import { Component, OnInit } from '@angular/core';
import { HideComponentService } from '../services/hide-component.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadersService } from '../services/loaders.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;

  constructor(
    private service: HideComponentService,
    private formBuilder: FormBuilder,
    private loading: LoadersService,
    private navCtrl: Router,
    private load: LoadingController
  ) { 
    this.loginForm = this.formBuilder.group({
      email: ['',Validators.required]
    })

  }

  ngOnInit() {
    this.service.hideTabs = true ;
  }
login(){
  this.service.hideTabs = true ;
  this.loader('Authenticating ...').then(()=>{
    this.navCtrl.navigate(['tabs/tab1']);
  });
}
// timed loaders 2 seconds
async loader(msg){
  const ld = await this.load.create({
    message: msg,
    duration: 300
  });
  await ld.present();
}
}
