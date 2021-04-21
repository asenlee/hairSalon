import {Employee} from './Employee';

export class Salon {
  shopID: number;
  shopNumber: number;
  postalCode: string;
  shopName: string;
  street: string;
  city: string;
  province: string;
  fullAddress: string;
  employees: Employee[] = [];

  deserialize(obj: any): Salon {
    Object.assign(this, obj);
    this.setFullAddress();
    return this;
  }

  setFullAddress(): void {
    this.fullAddress = `${this.shopName} ${this.street}, ${this.city},
    ${this.province.toUpperCase()} ${this.postalCode.toUpperCase()}`;
  }

  setEmployees(empList: any[]): void {
    this.employees = [];
    for (const emp of empList) {
      this.employees.push(new Employee().deserialize(emp));
    }
  }
}

