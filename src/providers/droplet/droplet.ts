import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DropletProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DropletProvider {

  constructor(public http: HttpClient) {}
  
  all(){
    return this.http.get('https://api.digitalocean.com/v2/droplets')
  }
}
