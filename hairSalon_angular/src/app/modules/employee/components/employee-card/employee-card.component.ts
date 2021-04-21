import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {
  faBatteryEmpty,
  faBatteryFull,
  faCalendarDay, faCheckCircle, faEye, faEyeSlash, faFolderMinus,
  faIdCard, faPen,
  faSpaceShuttle,
  faStore, faSyncAlt, faTrash,
  faUser
} from '@fortawesome/free-solid-svg-icons';
import {Employee} from '../../../../models/Employee';
import {SalonService} from '../../../salon/services/salon.service';
import {AlertDialogService} from "../../../shared/services/alert-dialog.service";

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.scss']
})
export class EmployeeCardComponent implements OnInit {
  emp: Employee;
  showScheduleList: boolean;
  showEditSchedule: boolean;
  icons = {
    user: faUser,
    shuttle: faSpaceShuttle,
    id: faIdCard,
    store: faStore,
    sync: faSyncAlt,
    day: faCalendarDay,
    full: faBatteryFull,
    empty: faBatteryEmpty,
    minus: faFolderMinus,
    pen: faPen,
    show: faEye,
    hide: faEyeSlash,
    trash: faTrash,
    success: faCheckCircle
  };

  @Input() set employee(value: Employee) {
    this.emp = value;
  }
  @Input() showSchedule = true;
  @Input() hideEditScheduleBtn: boolean;
  @Input() hideEmployeeDeleteBtn: boolean;

  @Output() employeeDeleted = new EventEmitter();
  cardConfig = {
    styles: {
      background: '#f2c1a778',
      boxShadow: 'rgb(8 35 48 / 20%) 0px 5px 9px',
      color: '#e57d7d',
    }
  };

  constructor(private salonService: SalonService, private alertService: AlertDialogService) { }

  ngOnInit(): void {
  }

  getSchedule(): void {
    this.salonService.getEmployeeSchedule(this.emp.empID)
      .then(scheduleList => {
        this.emp.setSchedule(scheduleList);
        this.showScheduleList = true;
        this.showEditSchedule = false;
      });
  }

  editSchedule(): void {
    this.hideSchedule();
    this.showEditSchedule = true;
  }

  hideSchedule(): void {
    this.showScheduleList = false;
  }

  deleteEmployee(): void {
    if (confirm('Are you sure you want to delete ' + this.emp.fullName + '\'s ' +
      'employee record?\n' +
      'Warning: This will also DELETE all the Bookings and the Employee Schedule')) {
      this.salonService.deleteEmployee(this.emp.empID)
        .then(res => {
          console.log(res);
          this.employeeDeleted.emit();
          this.alertService.showAlertDialog(
            {msg: this.emp.fullName + '\'s Record Deleted',
              icon: this.icons.success});
        });
    }
  }
}
