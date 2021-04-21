import {DaySchedule} from './DaySchedule';
import {Employee} from './Employee';

export class ScheduleEditor {
  employee: Employee;
  isNewSchedule = false;
  weekDays = new Map<string, {isNew?: boolean, selected?: boolean, schedule?: DaySchedule}>(
    [
      ['sun', {}],
      ['mon', {}],
      ['tue', {}],
      ['wed', {}],
      ['thu', {}],
      ['fri', {}],
      ['sat', {}]
    ]);

  setWeekDays(schedule: DaySchedule[]): void {
    if (!schedule || schedule.length === 0) { this.isNewSchedule = true; }
    for (const s of schedule) {
      this.weekDays.set(s.day, {selected: true, schedule: s});
    }
    console.log(this);
  }

  getDbData(): object {
    const dbObject = {empID: this.employee.empID, scheduleList: []};
    for (const dayEntry of this.weekDays) {
      const day = dayEntry[0];
      const obj = dayEntry[1];
      if (obj.selected) {
        const {shiftStart, end} = obj.schedule;
        dbObject.scheduleList.push({
          update: !obj.isNew,
          day,
          shiftStart: Number(shiftStart) % 24,
          end: Number(end) % 24
        });
      } else {
        dbObject.scheduleList.push({deleteDay: true, day});
      }
    }
    return dbObject;
  }

  handleScheduleUpdateSuccess(): void {
    for (const dayEntry of this.weekDays) {
      const obj = dayEntry[1];
      if (obj.isNew) { obj.isNew = false; }
    }
  }
}
