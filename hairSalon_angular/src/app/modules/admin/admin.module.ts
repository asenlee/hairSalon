import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './admin.component';
import {HttpClientModule} from '@angular/common/http';
import {StyledModule} from '../styled/styled.module';
import {AdminService} from './services/admin.service';
import {CustomerService} from '../customer/services/customer.service';
import {SalonService} from '../salon/services/salon.service';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EditEmployeeScheduleComponent } from '../employee/components/edit-employee-schedule/edit-employee-schedule.component';
import {EmployeeModule} from '../employee/employee.module';
import {SharedModule} from "../shared/shared.module";
import { HairProductComponent } from './components/hair-product/hair-product.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent
  }
];


@NgModule({
  declarations: [AdminComponent, HairProductComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    StyledModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    EmployeeModule,
    SharedModule
  ],
  providers: [CustomerService, AdminService, SalonService],
  exports: [
    EditEmployeeScheduleComponent
  ],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
