import { Component, OnInit } from '@angular/core';
import { Batch } from '../types';
import { AddInventoryService } from './services/add-inventory.service';
import { AddMedicineService } from '../add-medicine/services/add-medicine.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-inventory',
  templateUrl: './add-inventory.component.html',
  styleUrls: ['./add-inventory.component.css'],
  providers: [AddInventoryService, AddMedicineService]
})
export class AddInventoryComponent implements OnInit {
  batch : Batch = {
    receiptNum: 0,
    batchDate: new Date(),
    medicine: '',
    amount: 0,
    provider: '',
    employee: '',
  }
  medicines : string[] = [];
  providers : string[] = [];
  employees : string[] = [];
  status : string = '';

  constructor(private batchForm : AddInventoryService, private medicineData : AddMedicineService) { };
  
  ngOnInit() : void {
    this.batchForm.getProviders().subscribe(
      res => this.providers = res
    );

    this.batchForm.getEmployees().subscribe(
      res => this.employees = res
    );

    this.medicineData.getNames().subscribe(
      res => this.medicines = res
    );
  };

  submit(form : NgForm) {
    this.batchForm.postBatch(this.batch).subscribe(
      (res : any) => {
        console.log(res);
        this.status = 'Updated Successfully';
        form.reset();
      }
    )
  };

}
