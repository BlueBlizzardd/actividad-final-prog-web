import { Component, OnInit } from '@angular/core';
import { Medicine } from '../types';
import { AddMedicineService } from '../shared/services/add-medicine.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-medicine',
  templateUrl: './add-medicine.component.html',
  styleUrls: ['./add-medicine.component.css'],
  providers: [AddMedicineService]
})
export class AddMedicineComponent implements OnInit {
  medicine : Medicine = {
    name: '',
    amount: 0,
    type: '',
    expDate: new Date(),
    seller: ''
  };
  options : string[] = [];
  status : string = '';

  constructor(private medicineForm : AddMedicineService) { };

  ngOnInit(): void {
    this.medicineForm.getTypes().subscribe(
      res => this.options = res
    );
  }

  submit(form: NgForm) {
    this.medicineForm.postMedicine(this.medicine).subscribe(
      (res : any) => {
        console.log(res);
        this.status = 'Updated Successfully';
        form.reset();
      }
    );
  }

}
