import {Component, OnInit} from '@angular/core';
import {Customer} from '../../models/Customer';
import {CustomerService} from './services/customer.service';
import {AlertDialogService} from "../shared/services/alert-dialog.service";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  customer: Customer;
  phoneNumber: number;

  ngOnInit(): void {
    console.log('customer comp');
    this.setCustomer(1234567891); // for testing
  }

  constructor(private customerService: CustomerService, private alertService: AlertDialogService) {

  }

  async setCustomer(phoneNumber: number): Promise<void> {
    this.customer = await this.customerService.setCustomerFromDB(phoneNumber);
    this.alertService.showAlertDialog({msg: 'Customer Found', icon: faCheckCircle});
  }

  async handlePhoneNumber(): Promise<void> {
    this.setCustomer(this.phoneNumber);
  }

  async getBookings(): Promise<void> {
    this.customer.bookings = await this.customerService.getBookings();
    console.log(this.customer.bookings);
  }
}
