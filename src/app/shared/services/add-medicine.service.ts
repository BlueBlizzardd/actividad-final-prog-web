import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Medicine } from 'src/app/types';

const getMedType : string = 'http://localhost:80/api/getMedicineType';
const getMedNames : string = 'http://localhost:80/api/getMedNames';
const postReq : string = 'http://localhost:80/api/postMedicine';

@Injectable({
  providedIn: 'root'
})
export class AddMedicineService {

  constructor(private http : HttpClient) { }

  getTypes() : Observable<string[]> {
    return this.http.get<string[]>(getMedType).pipe(
      map((res : any) => {
        return res;
      })
    );
  }

  getNames() : Observable<string[]> {
    return this.http.get<string[]>(getMedNames).pipe(
      map((res : any) => res)
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
