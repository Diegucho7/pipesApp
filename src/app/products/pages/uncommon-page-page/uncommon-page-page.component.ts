import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

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
  public clientMap = {
    '=0':'no tenemos ningún cliente esperando',
    '=1':'tenemos un cliente esperando',
    '=2':'tenemos 2 clientes esperando',
    'other':'tenemos # clientes esperando'

  }
  deleteClient():void{
    this.clients.shift();
  }
  public person = {
    name: 'Diego',
    age: 29,
    address: 'Ottawa, Canada',
  }
  //Async Pipe
  public myObservableTime: Observable<number> = interval(2000).pipe(
    tap(value => console.log('tap:',value))
  );
  public promiseValue: Promise<string> = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve('Tenemos data en la promesa.');
      console.log('Tenemos data en la promesa.');
      this.person.name='Otro nombre';
    },3500)
  })

}
