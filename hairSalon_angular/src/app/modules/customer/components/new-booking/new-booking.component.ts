import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NewBookingService} from '../../services/new-booking.service';
import {Customer} from '../../../../models/Customer';
import {NewBooking} from '../../../../models/NewBooking';
import {faCheckCircle, faTimesCircle} from '@fortawesome/free-solid-svg-icons';
import {AlertDialogService} from '../../../shared/services/alert-dialog.service';

@Component({
  selector: 'app-new-booking',
  templateUrl: './new-booking.component.html',
  styleUrls: ['./new-booking.component.scss']
})
export class NewBookingComponent implements OnInit {
  newBooking: NewBooking;
  form = new FormGroup({
    shopID: new FormControl('', Validators.required),
    empID: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    time: new FormControl('', Validators.required),
    notes: new FormControl('')
  });

  @Input() set customer(value: Customer) {
    this.init();
    this.bs.setCustomer(value);
    console.log(value);
  }

  constructor(private bs: NewBookingService, private alertService: AlertDialogService) {  }

  ngOnInit(): void {
    this.init();
  }

  init(): void {
    if (!this.newBooking) {
      this.newBooking = this.bs.initializeBookingService();
    }
  }

  handleSubmit(): void {
    this.bs.createBooking()
      .then(() => this.handleBookingResponse(true))
      .catch(e => {
        this.handleBookingResponse();
        console.log(e);
      });
  }

  handleBookingResponse(succeeded?: boolean): void {
    if (succeeded) {
      this.form.reset();
      this.alertService.showAlertDialog({msg: 'Booking Created', icon: faCheckCircle});
    } else {
      this.alertService.showAlertDialog({msg: 'Booking Failed', icon: faTimesCircle});
    }
  }

  handleSalonSelect(): void {
    this.bs.setSalon(Number(this.form.value.shopID))
      .then(() =>
        this.clearFormValues(['empID', 'date', 'time']));
  }

  handleEmployeeSelect(): void {
    this.bs.setEmployee(Number(this.form.value.empID))
      .then(() =>
        this.clearFormValues(['date', 'time']));
  }

  handleDateSelect(): void {
    if (this.form.value.date) {
      this.bs.setDate(this.form.value.date)
        .then(() => {
          if (this.newBooking.employeeHours.length === 0) {
            const msg = this.newBooking.employee.fullName + ' is not scheduled for ' +
              this.newBooking.momentDate.format('MMMM Do YYYY');
            this.alertService.showAlertDialog({msg});
          }
        });
      this.clearFormValues(['time']);
    }
  }

  handleTimeSelect(): void {
    this.bs.setTime(this.form.value.time);
  }

  clearFormValues(formControlNames: string[]): void {
    const values = {};
    formControlNames.forEach(name => values[name] = '');
    this.form.patchValue(values);
  }
}
