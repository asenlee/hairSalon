import {Customer} from './Customer';
import {Salon} from './Salon';
import {Employee} from './Employee';
import {HairProduct} from './HairProduct';
import {ERDEntity} from './ERDEntity';

export class Admin {
  customers: Customer[] = [];
  salons: Salon[] = [];
  hairProducts: HairProduct[];
  currentSalon: Salon;
  currentEmployee: Employee;
  salonsThatSellAll: Salon[] = [];
  brands: Brand[] = [];

  setCustomerList(customerList: any[]): void {
    this.customers = [];
    for (const customer of customerList) {
      this.customers.push(new Customer().deserialize(customer));
    }
  }

  setSalonList(salonList: any[]): void {
    this.salons = [];
    for (const salon of salonList) {
      this.salons.push(new Salon().deserialize(salon));
    }
  }

  setHairProducts(hairProducts: any[]): void {
    this.hairProducts = [];
    for (const h of hairProducts) {
      this.hairProducts.push(new HairProduct().deserialize(h) as HairProduct);
    }
  }

  setSalonsSellsAll(salonList: any[]): void {
    this.salonsThatSellAll = [];
    for (const salon of salonList) {
      this.salonsThatSellAll.push(new Salon().deserialize(salon));
    }
  }

  setBrands(brandList: any[]): void {
    this.brands = [];
    console.log(brandList);
    for (const brand of brandList) {
      this.brands.push(new Brand().deserialize(brand) as Brand);
    }
  }
}

class Brand extends ERDEntity {
  brand: string;
  numProducts: number;
  totalPrice: number;
  totalQuantity: number;
  avgPrice: number;

  deserialize(obj: object): ERDEntity {
    super.deserialize(obj);
    if (this.totalPrice) {
      this.totalPrice = Number(this.totalPrice.toFixed(2));
    }
    if (this.avgPrice) {
      this.avgPrice = Number(this.avgPrice.toFixed(2));
    }
    return this;
  }
}
