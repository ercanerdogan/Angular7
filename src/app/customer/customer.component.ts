import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor() { }

  customer:string="Ercan Erdoğan"

  customers:Customer[]=[]
  selectedCustomer:Customer;
  
  ngOnInit() {
    this.customers=[
      {id:1,firstName:"Ercan",lastName:"xxxx", age:33},
      {id:2,firstName:"Hakan",lastName:"xxxx", age:31},
      {id:2,firstName:"John",lastName:"xxxx", age:11}
    ]
  }


  selectCustomer(customer:Customer){
    this.selectedCustomer = customer;
  }

}
