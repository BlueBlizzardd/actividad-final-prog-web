import { Component, OnInit } from '@angular/core';
import { Medicine } from '../types';
import { MedicineService } from '../shared/services/medicine.service';
import { PrintingService } from '../shared/services/printing.service';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css'],
  providers: [MedicineService]
})

export class MedicineComponent implements OnInit {
  medicine : Medicine[] = [];
  status : string = '';

  constructor(private medicineService : MedicineService, private printingService : PrintingService) { };
  
  ngOnInit() {
    this.getMedicine();
  }

  getMedicine(): void {
    this.medicineService.getMedicine().subscribe(
      (data: Medicine[]) => {
        this.medicine = data;
      }
    );
  }
  
  print(): void {
    const data : any = document.getElementById('htmlData');
    this.printingService.pdf(data);
  }
}
