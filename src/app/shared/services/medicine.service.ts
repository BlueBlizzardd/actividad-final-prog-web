import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

let url : string = 'http://localhost:80/api/getMedicine';

@Injectable({
  providedIn: 'root'
})

export class MedicineService { 

  constructor(private http : HttpClient) { }

  getMedicine() {
    return this.http.get(url).pipe(
      map((res : any) => {
        return res;
      })
    );
  }

}
