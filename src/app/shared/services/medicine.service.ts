import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

let url : string = 'https://actividad1progweb.000webhostapp.com/api/getMedicine.php';

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
