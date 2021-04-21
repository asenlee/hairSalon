import {Customer} from './Customer';
import {Salon} from './Salon';
import {Employee} from './Employee';
import * as moment from 'moment';
import {Booking} from './Booking';
import {DaySchedule} from './DaySchedule';

export class NewBooking extends Booking {
  customer: Customer;
  salonList: Salon[];
  employeeHours = [];


  setCustomer(customer: Customer): void {
    this.customer = customer;
  }

  setSalon(salon: Salon): void {
    this.salon = salon;
  }

  setSalonEmployees(employeeList: Employee[]): void {
    this.salon.setEmployees(employeeList);
  }

  setEmployee(e: Employee): void {
    this.employee = e;
    this.employeeHours = [];
  }

  setDate(date: string): void {
    this.employeeHours = [];
    this.date = date;
    this.momentDate = moment(date);
    this.day = this.momentDate.format('ddd').toLowerCase();
  }

  setTime(bookingStartTime: number): void {
    this.momentDate.set('hour', bookingStartTime);
    this.startTime = bookingStartTime;
    this.endTime = this.startTime + 1;
  }

  setNote(note: string): void {
    this.notes = note;
  }

  createDBObj(): object {
    return {
      phoneNumber: this.customer.phoneNumber,
      shopID: this.salon.shopID,
      empID: this.employee.empID,
      date: this.date,
      day: this.day,
      startTime: this.startTime,
      endTime: this.endTime,
      notes: this.notes
    };
  }

  setScheduleForDay(daySchedule: DaySchedule): void {
    console.log(daySchedule);
    if (daySchedule) {
      const {shiftStart, end} = daySchedule;
      if (shiftStart !== undefined) {
        for (let i = shiftStart; i < end; i++) {
          this.employeeHours.push(i);
        }
      }
    }
  }
}

