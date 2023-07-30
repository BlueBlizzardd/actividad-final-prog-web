import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Medicine } from 'src/app/types';

let getReq : string = 'http://localhost:80/api/getMedicineType';
let postReq : string = 'http://localhost:80/api/postMedicine';

@Injectable({
  providedIn: 'root'
})
export class AddMedicineService {

  constructor(private http : HttpClient) { }

  getTypes() : Observable<string[]> {
    return this.http.get<string[]>(getReq).pipe(
      map((res : any) => {
        return res;
      })
    );
  }

  postMedicine(medicine : Medicine) {
    return this.http.post(postReq, medicine).pipe(
      map((res : any) => {
        return res;
      })
    );
  };
}
