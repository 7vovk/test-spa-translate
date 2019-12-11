import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ITEMS_LIST } from './select-items';
import { Items } from './select-items-class.componet';

@Injectable()

export class SelectContentService {

  constructor() {}

  getContent(): Observable<Items[]> {
    return of(ITEMS_LIST);
  }


}
