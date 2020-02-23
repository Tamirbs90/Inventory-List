import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';
import { Item } from '../Item';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  item : Item;
  itemForm : FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    inventoryCode: new FormControl('',Validators.required),
    amount: new FormControl('',Validators.required)
  });

  constructor(private itemsService:ItemsService) {
   }

  ngOnInit() {
  }

  addItem(){
    this.item=new Item();
    this.item.name= this.ItemName.value;
    this.item.inventoryCode= this.ItemCode.value;
    this.item.amount= this.ItemAmount.value;
    console.log(this.item);
    let res=this.itemsService.addItem(this.item);
    res.subscribe(data=>console.log(data));
    this.itemForm.reset();
  }

  isPositiveNumber(value) {
    var n = Number(value);
    return n == n && n>0;
  }



  get ItemName(){return this.itemForm.get("name");}
  get ItemAmount() {return this.itemForm.get("amount");}
  get ItemCode(){return this.itemForm.get("inventoryCode");}
 


}
