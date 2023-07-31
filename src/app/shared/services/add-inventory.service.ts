import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Batch } from 'src/app/types';

const getProv : string = 'https://actividad1progweb.000webhostapp.com/api/getProviders.php';
const getEmp : string = 'https://actividad1progweb.000webhostapp.com/api/getEmployees.php';
const postBatch : string = 'https://actividad1progweb.000webhostapp.com/api/postBatch.php';

@Injectable({
  providedIn: 'root'
})
export class AddInventoryService {

  constructor(private http : HttpClient) { };

  getProviders() : Observable<string[]> {
    return this.http.get<string[]>(getProv).pipe(
      map((res : any) => res)
    );
  };

  getEmployees() : Observable<string[]> {
    return this.http.get<string[]>(getEmp).pipe(
      map((res : any) => res)
    );
  };

  postBatch(batch : Batch) {
    return this.http.post(postBatch, batch).pipe(
      map((res : any) => res)
    );
  };
}
