import { Component, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {
  @ViewChild(IonTabs) tabs;
  selected = '';
  progress = 42;
  constructor() {}

  setSelectedTab() {
    console.log('Tabs select called');
    this.selected = this.tabs.getSelected();
  }
}
