import { Injectable, ComponentFactory, ComponentFactoryResolver, ComponentRef, ViewContainerRef } from '@angular/core';

import { ConformComponent } from './conform.component';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ConformManagerService {
  private _rootViewContainerRef: ViewContainerRef;
  componentRef: ComponentRef<ConformComponent>;
  sendStatus = new Subject<boolean>();
  constructor(private resolver: ComponentFactoryResolver) { }

  setRootViewContainerRef(vRef: ViewContainerRef) {
    this._rootViewContainerRef = vRef;
  }

  show(message: string, title: string, cb?: (boolean) => void) {
    if (this._rootViewContainerRef) {
      this._rootViewContainerRef.clear();
      const factory: ComponentFactory<ConformComponent> = this.resolver.resolveComponentFactory(ConformComponent);
      this.componentRef = this._rootViewContainerRef.createComponent(factory);
      this.componentRef.instance.status.subscribe((value) => {
        console.log("inside manager");
        this.sendStatus.next(value);
        cb(value);
        this._rootViewContainerRef.clear();
      });
    }
  }

  conform(message: string, title: string, cb?: (boolean) => void): Observable<boolean> {
    this.show(message, title, cb);
    return this.sendStatus.asObservable();
  }

}
