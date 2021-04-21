import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Admin} from '../../../models/Admin';
import {SalonService} from '../../salon/services/salon.service';

@Injectable()
export class AdminService {
  url = environment.apiBaseURL + 'admin/';
  admin = new Admin();

  constructor(private http: HttpClient, private salonService: SalonService) { }

  init(): Admin {
    return this.admin;
  }

  async getAllCustomers(): Promise<void> {
    this.admin.setCustomerList(await this.http.get(this.url + 'getAllCustomers')
      .toPromise() as any[]);
  }

  async getAllSalons(): Promise<void> {
    this.admin.setSalonList(await this.salonService.getAllSalons());
  }

  async getAllHairProducts(): Promise<void> {
    this.admin.setHairProducts(
      await this.http.get(this.url + 'getAllHairProducts').toPromise() as any[]);
  }

  async getSalonsThatSellAllHairProducts(): Promise<void> {
    this.admin.setSalonsSellsAll(await this.http.get(
      this.url + 'getSalonsSellAll').toPromise() as any[]);
  }

  async getBrands(): Promise<void> {
    this.admin.setBrands(await this.http.get(
      this.url + 'getBrands').toPromise() as any[]);
  }

  async getExpensiveBrands(): Promise<void> {
    this.admin.setBrands(await this.http.get(
      this.url + 'getExpensiveBrands').toPromise() as any[]);
  }

  async getPopularBrands(): Promise<void> {
    this.admin.setBrands(await this.http.get(
      this.url + 'getPopularBrands').toPromise() as any[]);
  }
}
