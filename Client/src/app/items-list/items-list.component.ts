import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';
import { SpecificItemService } from '../specific-item.service';
import { Item } from '../Item';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {
  
  items: any;
  item: Item;
  searchId: number;
  toDeposit: number;
  toWithraw: number;
  found: boolean;
  error: boolean;
  constructor(private itemService: ItemsService) { }


  ngOnInit() {
    this.getItemsList();
    this.found=false;
  }

 
 getItemsList(){
    let res= this.itemService.getItemsList();
    this.getData(res);
    //res.subscribe(data=>{
      //this.items=data;
      //console.log(this.items);}
     // );
  }

  getItemById(id:number){
    let res=this.itemService.getItemById(id);
      res.subscribe((data) =>
      {
          this.found=true;
          this.error=false
          this.item=data;
          console.log(this.item);
        },
       (err)=>{
         this.found=false;
         this.error=true;
       }
      );
  }

  deleteItem(id:number){
     let res = this.itemService.deleteItem(id);
     this.getData(res);
     //res.subscribe(data=>console.log(data))
  }

  depositItemQuantity(id:number, amount:number){
    let res=this.itemService.depositItemQuantity(id,amount);
    this.getData(res);
    //res.subscribe(data=>console.log(data));
    //this.getItemsList();
  }

  withrawItemQuantity(id:number, amount:number){
   let res= this.itemService.withrawItemQuantity(id,amount);
   this.getData(res);
   //res.subscribe(data=>console.log(data));
    //this.getItemsList();
  }

  getData(res){
    res.subscribe(data=>{
      this.items=data;
      console.log(this.items);
    });
  }

}
