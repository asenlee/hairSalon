import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Customer} from '../../../models/Customer';
import {Booking} from '../../../models/Booking';

@Injectable()
export class CustomerService {
  url = environment.apiBaseURL + 'customer/';
  customer: Customer;

  constructor(private http: HttpClient) {
    console.log('customer service initialized');
  }

  async getBookings(): Promise<any> {
    this.customer.setBookingList(await this.http.post(this.url + 'getBookings',
      {phoneNumber:  this.customer.phoneNumber}).toPromise() as []);
    return this.customer.bookings;
  }

  getCustomer(phoneNumber: number): Promise<any> {
    return this.http.post(this.url + 'getCustomer', {phoneNumber}).toPromise();
  }

  async setCustomerFromDB(phoneNumber: number): Promise<any> {
    const res = await this.getCustomer(phoneNumber);
    if (res[0]) {
      this.customer = new Customer().deserialize(res[0]);
      console.log(this.customer);
      return this.customer;
    }
  }

  setCustomer(customer: Customer): void {
    this.customer = customer;
  }
}
