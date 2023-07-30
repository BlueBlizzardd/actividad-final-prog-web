import { Component, OnInit } from '@angular/core';
import { Batch } from '../types';
import { InventoryService } from './services/inventory.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css'],
  providers: [InventoryService]
})
export class InventoryComponent implements OnInit {
  batches : Batch[] = []; 
  status : string = '';

  constructor(private inventoryService : InventoryService) { };
  
  ngOnInit() {
    this.getBatches();
  }

  getBatches() : void {
    this.inventoryService.getBatch().subscribe(
      (data: Batch[]) => {
        this.batches = data;
        this.status = 'successful retrieval of the list';
        console.log(this.status);
        console.log(this.batches);
      },
      (err) => {
        this.status = err;
        console.log(err);
      }
    );
  };
    
}
