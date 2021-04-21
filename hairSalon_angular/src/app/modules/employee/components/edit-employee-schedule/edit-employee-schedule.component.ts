import {Component, Input, OnInit} from '@angular/core';
import {Employee} from '../../../../models/Employee';
import {SalonService} from '../../../salon/services/salon.service';
import {ScheduleEditor} from '../../../../models/ScheduleEditor';
import {DaySchedule} from '../../../../models/DaySchedule';
import {faCheckCircle, faWrench} from '@fortawesome/free-solid-svg-icons';
import {AlertDialogService} from "../../../shared/services/alert-dialog.service";

@Component({
  selector: 'app-edit-employee-schedule',
  templateUrl: './edit-employee-schedule.component.html',
  styleUrls: ['./edit-employee-schedule.component.scss']
})
export class EditEmployeeScheduleComponent implements OnInit {
  scheduleEditor = new ScheduleEditor();
  icons = {
    wrench: faWrench,
    success: faCheckCircle
  };
  cardConfig = {
    styles: {
      width: 'fit-content'
    }
  };

  @Input() set employee(val: Employee) {
    this.scheduleEditor.employee = val;
  }

  constructor(private salonService: SalonService, private alertService: AlertDialogService) {
  }

  ngOnInit(): void {
    this.setEmpSchedule();
  }

  async setEmpSchedule(): Promise<void> {
    let schedule = this.scheduleEditor.employee.schedule;
    if (!schedule || schedule.length === 0) {
      await this.salonService.setEmployeeSchedule(this.scheduleEditor.employee);
      schedule = this.scheduleEditor.employee.schedule;
    }
    this.scheduleEditor.setWeekDays(schedule);
  }

  returnZero(): number {
    return 0;
  }

  handleDaySelect(day: string): void {
    const s = this.scheduleEditor.weekDays.get(day);
    s.selected = !s.selected;
    if (!s.schedule) {
      s.schedule = new DaySchedule();
      s.isNew = true;
      s.schedule.day = day;
    }
  }

  handleSubmit(): void {
    const dbData = this.scheduleEditor.getDbData();
    this.salonService.updateSchedule(dbData)
      .then(s => {
        this.scheduleEditor.handleScheduleUpdateSuccess();
        this.alertService.showAlertDialog(
          {msg: this.scheduleEditor.employee.fullName + '\'s Schedule Updated',
            icon: this.icons.success});
      })
      .catch(e => console.log(e));
  }

}
