import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Batch } from 'src/app/types';

const getProv : string = 'http://localhost:80/api/getProviders';
const getEmp : string = 'http://localhost:80/api/getEmployees';
const postBatch : string = 'http://localhost:80/api/postBatch';

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
