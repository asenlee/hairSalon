import * as moment from 'moment';

export class DaySchedule {
  empID: number;
  day: string;
  shiftStart = 0;
  end = 0;
  startMoment: moment.Moment;
  endMoment: moment.Moment;

  deserialize(obj: any): DaySchedule {
    Object.assign(this, obj);
    this.setMomentTime();
    return this;
  }

  setMomentTime(): void {
    this.startMoment = moment().set('hour', this.shiftStart).set('minute', 0);
    this.endMoment = moment().set('hour', this.end).set('minute', 0);
  }
}
