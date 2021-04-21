import {Booking} from './Booking';

export class Customer {
  firstName;
  lastName;
  fullName;
  phoneNumber;
  email;
  loyaltyCardID;
  bookings: Booking[] = [];

  deserialize(customerObj): Customer {
    Object.assign(this, customerObj);
    this.fullName = `${this.firstName} ${this.lastName}`;
    return this;
  }

  setBookingList(list: []): void {
    this.bookings = [];
    for (const b of list) {
      this.bookings.push(new Booking().deserialize(b));
    }
  }
}
