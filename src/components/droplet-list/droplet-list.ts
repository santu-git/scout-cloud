import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the DropletListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'droplet-list',
  templateUrl: 'droplet-list.html'
})
export class DropletListComponent {
  @Input() droplets: any;
  @Output() dropletSelected = new EventEmitter<any>();
  
  constructor() {}
  
  doSelection(data){
    this.dropletSelected.emit(data);
  }
}
