import { Component,OnInit} from "@angular/core";
import { HomeServices  } from "./home-services/home.services"
import { Customer } from "./home-models/customer.model"
@Component({
  selector: "app-home",
  templateUrl:"./home.component.html",
  styleUrls:["./home.component.scss"],
  providers:[HomeServices]
})
export class HomeComponent implements OnInit{
  customer: Customer[];
  selectedCustomer: Customer;

  constructor(private homeService: HomeServices){
    console.log("home work"); 
  }
  getAllCustomers(): void {
    this.homeService.getAllCustomers().then(result => this.customer = result)
  }
  getCustomerById(): void {
    this.homeService.getCustomer(1).then(result => this.selectedCustomer = result)
  }
  ngOnInit(): void {
    console.log("app work");
    this.getAllCustomers();
    console.log(this.customer);
  }
}
