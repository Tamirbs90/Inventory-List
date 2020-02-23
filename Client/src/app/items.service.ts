import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from './Item';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

 private host:string= 'http://localhost:8080/api/';

  constructor(private http : HttpClient) { }

  public getItemsList() {
    return this.http.get("http://localhost:8080/api/items");
  }

  public getItemById(id: number) : Observable<Item> {
    return this.http.get<Item>(this.host+'items/'+id);
  }

  public addItem(item: Item){
    console.log(item);
    return this.http.post("http://localhost:8080/api/items",item);
  }

  public deleteItem(id:number){
    return this.http.delete(this.host+'items/'+id);
  }
  
  public depositItemQuantity(id:number, amount:number){
    return this.http.get(this.host+'/items/'+id+'/deposit/'+amount);
  }
  
  public withrawItemQuantity(id:number, amount:number){
    return this.http.get(this.host+'items/'+id+'/withraw/'+amount);
  }


}
