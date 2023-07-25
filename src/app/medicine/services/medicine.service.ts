import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class MedicineService { 

  constructor(private http : HttpClient) { }

  getMedicine() {
    return this.http.get(`api/selectMedicine`).pipe(
      map((res : any) => {
        return res;
      })
    );
  }

}
