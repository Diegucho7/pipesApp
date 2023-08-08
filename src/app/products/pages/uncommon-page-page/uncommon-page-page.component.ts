import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-page-page',
  templateUrl: './uncommon-page-page.component.html',
  styleUrls: ['./uncommon-page-page.component.css']
})
export class UncommonPagePageComponent {

// i18n Select
  public name: string = 'Diego';
  public gender: 'male'|'female' = 'male';
  public invitationMap ={
    'male':'invitarlo',
    'female':'invitarla'
  }

  changeClient():void{
    this.name= 'Melissa';
    this.gender= 'female';

  }

  // i18n Plural
  public clients: string[] = ['Maria','Pedro', 'Fernando','Mario','Eduardo','Melissa', 'Natalia']
  deleteClient():void{
    this.clients.shift();
  }
}
