import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Hero, Color } from '../../interfaces/hero.interface';

@Component({
  // selector: 'products-order',
  selector: 'toolbar-basic-demo',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent {
  public isUpperCase: boolean = false;

  public orderBy?: keyof Hero ;

  public heroes: Hero[] = [
    {
      name:'Superman',
      canFly: true,
      color: Color.blue,
    },
    {
      name:'Batman',
      canFly: false,
      color: Color.black,
    },
    {
      name:'Daredevil',
      canFly: false,
      color: Color.red,
    },
    {
      name:'Robin',
      canFly: false,
      color: Color.red,
    },
    {
      name:'Linterna Verde',
      canFly: true,
      color: Color.green,
    }
  ]
  toggleUpperCase():void{
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder(value: keyof Hero){
    this.orderBy = value;
  }
}
