import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

let url : string = 'https://actividad1progweb.000webhostapp.com/api/getBatch.php';

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
