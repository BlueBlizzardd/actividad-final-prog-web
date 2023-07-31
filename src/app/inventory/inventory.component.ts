import { Component, OnInit } from '@angular/core';
import { Batch } from '../types';
import { InventoryService } from '../shared/services/inventory.service';
import { PrintingService } from '../shared/services/printing.service';
import Chart from 'chart.js/auto';
import 'chartjs-adapter-moment';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css'],
  providers: [InventoryService, PrintingService]
})
export class InventoryComponent implements OnInit {
  batches : Batch[] = []; 
  chart : any;
  status : string = '';

  constructor(private inventoryService : InventoryService, private printingService : PrintingService) { };
  
  ngOnInit() {
    this.getBatches();
  }

  getBatches() : void {
    this.inventoryService.getBatch().subscribe(
      (data: Batch[]) => {
        this.batches = data;

        const unique = this.batches.map(batch => batch.medicine).filter((value, index, self) => self.indexOf(value) === index);

        this.chart = new Chart("batchChart", {
          type: 'line',
          data: {
            datasets: unique.map(med => ({
              label: med,
              data: this.batches.filter(batch => batch.medicine === med).map(obj => ({
                x: obj.batchDate,
                y: obj.amount
              }))  
            }))
          },
          options: {
            scales: {
              x: { 
                type: 'time',
                title: {
                  display: true,
                  text: 'Date'
                },
              },
              y: {
                title: {
                  display: true,
                  text: 'Amount'
                },
              }
            }
          }
        });
      }
    );
  };

  print() : void {
    let data: any = document.getElementById('htmlData');
    this.printingService.pdf(data);
  }

}
