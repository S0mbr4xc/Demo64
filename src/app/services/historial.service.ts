import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistorialService {

  historial: string[] = ['25','65']

  constructor() { }

  add(ans: string){
    this.historial.push(ans)
  }

  clear(){
    this.historial = []
  }

  get(){
    return this.historial
  }
}
