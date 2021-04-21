import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NewBooking} from '../../../models/NewBooking';
import {environment} from '../../../../environments/environment';
import {Customer} from '../../../models/Customer';
import {SalonService} from '../../salon/services/salon.service';
import * as moment from 'moment';

@Injectable()
export class NewBookingService {
  url = environment.apiBaseURL + 'booking/';
  newBooking: NewBooking;

  constructor(private http: HttpClient, private salonService: SalonService) { }

  initializeBookingService(): NewBooking {
    this.newBooking = new NewBooking();
    this.salonService.getAllSalons().then(salonList => this.newBooking.salonList = salonList);
    return this.newBooking;
  }

  async setSalon(shopID): Promise<void> {
    for (const s of this.newBooking.salonList) {
      if (s.shopID === shopID) {
        this.newBooking.setSalon(s);
        this.newBooking.setSalonEmployees(await this.salonService.getEmployees(shopID));
      }
    }
  }

  async setEmployee(empID: number): Promise<void> {
    for (const e of this.newBooking.salon.employees) {
      if (e.empID === empID) {
        this.newBooking.setEmployee(e);
      }
    }
  }

  async setDate(date: string): Promise<void> {
    this.newBooking.setDate(date);
    const daySchedule = await this.salonService.getEmployeeScheduleForDay(
      this.newBooking.employee.empID, this.newBooking.day);
    this.newBooking.setScheduleForDay(daySchedule);
  }

  createBooking(): Promise<any> {
    return this.http.post(this.url + 'createNew', this.newBooking.createDBObj())
      .toPromise();
  }

  setCustomer(customer: Customer): void {
    this.newBooking.setCustomer(customer);
  }

  setTime(time: number): void {
    this.newBooking.setTime(time);
  }
}
