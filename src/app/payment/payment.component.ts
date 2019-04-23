import { Component, OnInit, ViewChild } from '@angular/core';
import { SincronizerComponent } from '../sincronizer/sincronizer.component';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  description = "";
  type = "";
  id = "";

  payments = [];

  @ViewChild('paymentSuccess') private paymentSuccess: SwalComponent;

  constructor(private sinc: SincronizerComponent) { }
  
  ngOnInit() {
    this.getAllPayments();
  }

  savePayment(){
    var data = {
      description: this.description,
      type: this.type,
      id: this.id
    }

    this.sinc.savePayment(data, (data) => {
      this.getAllPayments();
      this.paymentSuccess.show();
    });
  }

  getAllPayments(){
    this.sinc.getAllPayments((data) => {
      this.payments = data;
    });
  }

  changePayment(i){
    this.description = this.payments[i].description;
    this.type = this.payments[i].type;
    this.id = this.payments[i].id;
  }

  clearPayment(){
    this.description = "";
    this.type = "";
    this.id = "";
  }
  

}
