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
  success : string = '';
  error : string = '' ;

  constructor(private medicineService : MedicineService) { };
  
  ngOnInit() {
    this.getMedicine();
  }

  getMedicine(): void {
    this.medicineService.getMedicine().subscribe(
      (data: Medicine[]) => {
        this.medicine = data;
        this.success = 'successful retrieval of the list';
        console.log(this.success);
      },
      (err) => {
        this.error = err;
        console.log(err);
      }
    );
  }
  
}
