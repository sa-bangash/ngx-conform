import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConformComponent } from './conform.component';
import {ConformManagerService} from './conform-manager.service';
@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ConformComponent],
  entryComponents: [ConformComponent],
  declarations: [ConformComponent]
})
export class ConformModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: ConformModule,
      providers: [ConformManagerService],
    };
  }
 }
