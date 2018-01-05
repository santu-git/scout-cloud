import { NgModule } from '@angular/core';
import { DropletListComponent } from './droplet-list/droplet-list';
import { IonicModule } from 'ionic-angular';

@NgModule({
  declarations: [
    DropletListComponent
  ],
  imports: [
    IonicModule
  ],
  exports: [
    DropletListComponent
  ]
})
export class ComponentsModule { }
