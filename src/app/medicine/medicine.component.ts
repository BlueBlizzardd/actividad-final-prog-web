import { Component, OnInit } from '@angular/core';
import { Medicine } from '../types';
import { MedicineService } from './services/medicine.service';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css'],
  providers: [MedicineService]
})

export class MedicineComponent implements OnInit {
  medicine : Medicine[] = [];
  status : string = '';

  constructor(private medicineService : MedicineService) { };
  
  ngOnInit() {
    this.getMedicine();
  }

  getMedicine(): void {
    this.medicineService.getMedicine().subscribe(
      (data: Medicine[]) => {
        this.medicine = data;
        this.status = 'successful retrieval of the list';
        console.log(this.status);
      },
      (err) => {
        this.status = err;
        console.log(err);
      }
    );
  }
  
}
