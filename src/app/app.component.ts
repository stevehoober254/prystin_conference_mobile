import { Component, ViewChildren, QueryList } from '@angular/core';

import { Platform, IonRouterOutlet, MenuController, ToastController, ActionSheetController, PopoverController, ModalController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  lastTimeBackPress = 0;
  timePeriodToExit = 2000;
  showSplash = true;
  data = [];

  @ViewChildren(IonRouterOutlet) routerOutlets: QueryList<IonRouterOutlet>;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu: MenuController,
    private toast: ToastController,
    private actionSheetCtrl: ActionSheetController,
    private popoverCtrl: PopoverController,
    private modalCtrl: ModalController,
    private routerCtrl: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    this.backButtonEvent();
  }
 // active hardware back button
  backButtonEvent() {
    this.platform.backButton.subscribe(async () => {
      // close action sheet
      try {
        const element = await this.actionSheetCtrl.getTop();
        if (element) {
          element.dismiss();
          return;
        }
      } catch (error) {
      }

      // close popover
      try {
        const element = await this.popoverCtrl.getTop();
        if (element) {
          element.dismiss();
          return;
        }
      } catch (error) {
      }

      // close modal
      try {
        const element = await this.modalCtrl.getTop();
        if (element) {
          element.dismiss();
          return;
        }
      } catch (error) {
        console.log(error);

      }

      // close side menua
      try {
        const element = await this.menu.getOpen();
        if (element) {
          this.menu.close();
          return;

        }

      } catch (error) {

      }

      this.routerOutlets.forEach((outlet: IonRouterOutlet) => {
        if (outlet && outlet.canGoBack()) {
          outlet.pop();

        } else if (this.routerCtrl.url === '/home') {
          if (new Date().getTime() - this.lastTimeBackPress < this.timePeriodToExit) {
            // this.platform.exitApp(); // Exit from app
            navigator['app'].exitApp(); // work in ionic 4

          } else {
            this.toasted(
              'Press back again to exit App.')
            this.lastTimeBackPress = new Date().getTime();
          }
        }
      });
    });
  }
  async toasted(msg) {
    const ts = await this.toast.create({
      message: msg,
      duration: 2000,
      position: 'middle'
    });
    ts.present();
  }

}
