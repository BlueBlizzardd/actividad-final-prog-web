import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

let url : string = 'http://localhost:80/api/getBatch';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private http : HttpClient) { }

  getBatch() {
    return this.http.get(url).pipe(
      map((res : any) => {
        return res;
      })
    );
  };
}
