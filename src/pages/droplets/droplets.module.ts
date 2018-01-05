import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DropletsPage } from './droplets';
import { IonicModule } from 'ionic-angular';


@NgModule({
  declarations: [
    DropletsPage,
  ],
  imports: [
    IonicModule,
    IonicPageModule.forChild(DropletsPage),
    ComponentsModule
  ],
  entryComponents: [
    DropletsPage
  ]
})
export class DropletsPageModule {}
