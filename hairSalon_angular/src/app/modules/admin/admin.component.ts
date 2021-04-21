import {Component, OnInit} from '@angular/core';
import {Customer} from '../../models/Customer';
import {AdminService} from './services/admin.service';
import {Salon} from '../../models/Salon';
import {HairProduct} from '../../models/HairProduct';
import {SalonService} from '../salon/services/salon.service';
import {Employee} from '../../models/Employee';
import {
  faChevronRight,
  faCopyright,
  faDollarSign,
  faMapMarkerAlt,
  faSprayCan,
  faStore,
  faUsers, faUsersSlash
} from '@fortawesome/free-solid-svg-icons';
import {Admin} from '../../models/Admin';

type AdminView  = {
  btnText?: string;
  type: ViewTypes;
  viewTitle: string;
};
enum ViewTypes {CUSTOMER, SALON, HAIR_PRODUCTS, NEW_EMPLOYEE, EMPLOYEE_SCHEDULE}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  admin: Admin;
  currentView: AdminView;
  viewTypes = ViewTypes;
  viewType: ViewTypes;
  list: Salon[] | Customer[] | HairProduct[] = [];
  adminViews: AdminView[] = [
    {btnText: 'Get all Salons', viewTitle: 'Salons', type: ViewTypes.SALON},
    {btnText: 'Get all Customers', viewTitle: 'Customers', type: ViewTypes.CUSTOMER},
    {btnText: 'Create New Employee', viewTitle: 'New Employee', type: ViewTypes.NEW_EMPLOYEE},
    {btnText: 'Hair Products', viewTitle: 'Hair Products', type: ViewTypes.HAIR_PRODUCTS},
  ];
  listViewConfig = {
    styles:
      {
        display: 'flex',
        width: '100%',
        height: '100%',
        justifyContent: 'space-around',
        flexDirection: 'column'
      }
  };
  headerConfig = {
    styles: {
      marginBottom: 0,
      display: 'flex',
      justifyContent: 'center',
      background: '#f9e2d6',
      boxShadow: 'rgb(209 133 133 / 41%) 0px 5px 32px',
      color: '#de5367'
    }
  };
  icons = {
    store: faStore,
    mapMarker: faMapMarkerAlt,
    users: faUsers,
    hide: faUsersSlash,
    right: faChevronRight
  };

  constructor(private adminService: AdminService, private salonService: SalonService) {
  }
  ngOnInit(): void {
    console.log('admin Comp');
    this.admin = this.adminService.init();
    this.currentView = this.adminViews[0];
    this.handleActionClick(this.currentView);
  }

  handleActionClick(view: AdminView): void {
    this.currentView = view;
    switch (view.type) {
      case ViewTypes.CUSTOMER:
        this.adminService.getAllCustomers();
        break;
      case ViewTypes.SALON:
        this.adminService.getAllSalons();
        break;
    }
  }
}
