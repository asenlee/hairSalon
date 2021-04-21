import {Component, Input, OnInit} from '@angular/core';
import {faCopyright, faDollarSign, faHashtag, faSprayCan} from '@fortawesome/free-solid-svg-icons';
import {HairProduct} from '../../../../models/HairProduct';
import {AdminService} from '../../services/admin.service';
import {Admin} from '../../../../models/Admin';

enum ViewType {ALL, SELLS_ALL, BRANDS, GROUP_BY_HAVING}

@Component({
  selector: 'app-hair-product',
  templateUrl: './hair-product.component.html',
  styleUrls: ['./hair-product.component.scss']
})
export class HairProductComponent implements OnInit {
  admin: Admin;
  viewType = ViewType;
  currentViewType: ViewType;
  icons = {
    spray: faSprayCan,
    brand: faCopyright,
    dollar: faDollarSign,
    hash: faHashtag,
  };

  @Input() product: HairProduct;

  constructor(private adminService: AdminService) {
    this.admin = adminService.admin;
  }

  ngOnInit(): void {
    this.getAll();
  }


  getSalonsSellAll(): void {
    this.currentViewType = this.viewType.SELLS_ALL;
    this.adminService.getSalonsThatSellAllHairProducts();
  }

  getAll(): void {
    this.currentViewType = this.viewType.ALL;
    this.adminService.getAllHairProducts();
  }

  getBrands(): void {
    this.currentViewType = this.viewType.BRANDS;
    this.adminService.getBrands();
  }

  getPopularBrands(): void {
    this.currentViewType = this.viewType.BRANDS;
    this.adminService.getPopularBrands();
  }

  getExpensiveBrands(): void {
    this.currentViewType = this.viewType.BRANDS;
    this.adminService.getExpensiveBrands();
  }
}
