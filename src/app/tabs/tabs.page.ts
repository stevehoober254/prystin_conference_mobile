import { Component } from '@angular/core';
import { HideComponentService } from '../services/hide-component.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(
    private service: HideComponentService
  ) {}

}
