import {ERDEntity} from './ERDEntity';

export class HairProduct extends ERDEntity {
  productID: number;
  productName: string;
  brand: string;
  expensiveness: number;
  expensivenessArray: number[];

  deserialize(obj: object): ERDEntity {
    super.deserialize(obj);
    this.expensivenessArray = Array(this.expensiveness).fill(0);
    return this;
  }
}
