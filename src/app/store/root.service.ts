import { Injectable } from '@angular/core';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RootService {

  state:any= {
    a:1,
    b:2,
    d:3
  };
  
  sub:any

  constructor() { 
    this.sub = new Subject();

    this.sub.next(this.state);
  }

  dispatch(){

  }

  subscribe(callback){
    return this.sub.subscribe(callback);
  }

  afterFn(fn,afterFn){
    return function(){
      const ret = fn.apply(this,arguments);
      afterFn.apply(this,arguments);
      return ret;
    }
  }
  
}
