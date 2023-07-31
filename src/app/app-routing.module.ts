import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryComponent } from './inventory/inventory.component';
import { MedicineComponent } from './medicine/medicine.component';
import { AddMedicineComponent } from './add-medicine/add-medicine.component';
import { AddInventoryComponent } from './add-inventory/add-inventory.component';

const routes: Routes = [
  { path: '', redirectTo: "home", pathMatch: "full"},
  { path: 'inventory', component: InventoryComponent },
  { path: 'medicine', component: MedicineComponent },
  { path: 'add-medicine', component: AddMedicineComponent },
  { path: 'add-inventory', component: AddInventoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
