import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CustomerComponent} from './customer.component';
import {RouterModule, Routes} from '@angular/router';
import {CustomerService} from './services/customer.service';
import {StyledModule} from '../styled/styled.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NewBookingComponent } from './components/new-booking/new-booking.component';
import {NewBookingService} from "./services/new-booking.service";
import {AdminService} from "../admin/services/admin.service";
import {SalonService} from "../salon/services/salon.service";
import {SharedModule} from "../shared/shared.module";
import {EmployeeModule} from "../employee/employee.module";

const routes: Routes = [
  {
    path: '',
    component: CustomerComponent
  }
];

@NgModule({
  declarations: [
    CustomerComponent,
    NewBookingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StyledModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    EmployeeModule,
  ],
  providers: [CustomerService, NewBookingService, AdminService, SalonService],
  bootstrap: [CustomerComponent]
})
export class CustomerModule { }
