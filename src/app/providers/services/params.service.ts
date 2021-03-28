import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParamsService {
  params: any = {};

  constructor() { }

  getParams = (key: string) => {
    if (key in this.params) {
      return this.params[key];
    } else {
      return { error: "err-get-param:" + key };
    }
  }

  setParams = (key: string, value: any) => {
    this.params[key] = value;
  }

  reset = () => {
    this.params = {};
  }

}
