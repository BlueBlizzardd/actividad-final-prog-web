import { Component, OnInit } from '@angular/core';
import { Batch } from '../types';
import { AddInventoryService } from './services/add-inventory.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-inventory',
  templateUrl: './add-inventory.component.html',
  styleUrls: ['./add-inventory.component.css'],
  providers: [AddInventoryService]
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
  providers : string[] = [];
  employees : string[] = [];
  status : string = '';

  constructor(private batchForm : AddInventoryService) { };
  
  ngOnInit() : void {
    this.batchForm.getProviders().subscribe(
      res => this.providers = res
    );

    this.batchForm.getEmployees().subscribe(
      res => this.employees = res
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
