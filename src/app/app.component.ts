import { Component, ViewContainerRef } from '@angular/core';

import { ConformManagerService } from './modules/conform/conform-manager.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';
  constructor(private conformManagerService: ConformManagerService, private contRef: ViewContainerRef) {
    this.conformManagerService.setRootViewContainerRef(contRef);
  }

  createComponent() {
this.conformManagerService.conform('are you want to delete Aricraft', 'Delete Aircraft', function (value: boolean) {
      console.log(this.title);
    });
  }
}
