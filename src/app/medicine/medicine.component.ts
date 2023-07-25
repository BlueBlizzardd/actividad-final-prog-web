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
  constructor(private medicineService : MedicineService) { };
  
  ngOnInit() {
    
  }
}
