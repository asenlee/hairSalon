import {DaySchedule} from './DaySchedule';
import * as moment from 'moment';
import {ERDEntity} from "./ERDEntity";

export class Employee extends ERDEntity {
  empID: number;
  fullName: string;
  firstName: string;
  lastName: string;
  position: string;
  shopID: number;
  schedule: DaySchedule[] = [];

  deserialize(obj: any): Employee {
    super.deserialize(obj);
    this.setFullName();
    return this;
  }

  setFullName(first?: string, last?: string): void {
    first = first || this.firstName;
    last = last || this.lastName;
    this.fullName = `${first} ${last}`;
  }

  setSchedule(scheduleList: any[]): void {
    this.schedule = [];
    for (const s of scheduleList) {
      this.schedule.push(new DaySchedule().deserialize(s));
    }
  }
}
