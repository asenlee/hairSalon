import {Employee} from './Employee';
import {Salon} from './Salon';
import * as moment from 'moment';

export class Booking {
  phoneNumber: number;
  date: string;
  day: string;
  startTime: number;
  endTime: number;
  notes: string;
  employee: Employee;
  salon: Salon;
  momentDate: moment.Moment;

  deserialize(obj: any): Booking {
    // set employee
    const {empID, e_firstName, e_lastName, position} = obj;
    this.employee = new Employee().deserialize({empID, firstName: e_firstName,
      lastName: e_lastName, position});

    // set salon
    const {shopID,      shopNumber,      postalCode,      shopName,      street, city, province} = obj;
    this.salon = new Salon().deserialize({ shopID, shopNumber, postalCode, city, province,
      shopName, street});

    const {date, day, startTime, endTime, notes} = obj;
    Object.assign(this, {date, day, startTime, endTime, notes});

    const time = startTime < 10 ? '0' + startTime : startTime;
    this.momentDate = moment(`${date}T${time}`);
    return this;
  }
}
