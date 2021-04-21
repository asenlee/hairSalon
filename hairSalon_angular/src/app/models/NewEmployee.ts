import {Employee} from './Employee';
import {Salon} from './Salon';

export class NewEmployee extends Employee {
  salonList: Salon[] = [];

  getDBObject(): object {
    const {empID, firstName, lastName, position, shopID} = this;
    return { empID, firstName, lastName, position, shopID};
  }
}
