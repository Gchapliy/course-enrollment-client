import {Injectable, EventEmitter} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmitterService {
  public onLogin: EventEmitter<any> = new EventEmitter<any>();
  public onSearch: EventEmitter<any> = new EventEmitter<any>();

  public emitLogin(message: string) {
    this.onLogin.emit({message});
  }

  public emitSearch(id: any, text: string) {
    this.onSearch.emit({id, text});
  }
}
