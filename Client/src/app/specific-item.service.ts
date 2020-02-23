import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpecificItemService {

  private itemSource= new BehaviorSubject<any>("deafult message");
  currentItem= this.itemSource.asObservable();
  
  constructor() { }

  changeItem(item:any){
    this.itemSource.next(item);
  }


}
