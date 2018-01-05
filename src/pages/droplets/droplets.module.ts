import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DropletsPage } from './droplets';

@NgModule({
  declarations: [
    DropletsPage,
  ],
  imports: [
    IonicPageModule.forChild(DropletsPage),
  ],
  entryComponents: [
    DropletsPage
  ]
})
export class DropletsPageModule {}
