import { Component, OnInit, ViewChild } from '@angular/core';
import { SincronizerComponent } from '../sincronizer/sincronizer.component';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  description = "";
  unit = "";
  ncm = "";
  value = "";
  barcode = "";
  quantities = "";
  id = "";

  products = [];

  @ViewChild('productSuccess') private productSuccess: SwalComponent;

  constructor(private sinc: SincronizerComponent) { } 

  ngOnInit() {
    this.getAllProducts();
  }

  saveProduct(){
    var data = {
      description: this.description,
      unit: this.unit,
      ncm: this.ncm,
      value: this.value,
      barcode: this.barcode,
      quantities: this.quantities,
      id: this.id
    };
    this.sinc.saveProduct(data, (data) => {
      this.clearProduct();
      this.productSuccess.show();
      this.getAllProducts();
    })
  }

  getAllProducts(){
    this.sinc.getAllProducts((data) => {
      this.products = data;
    });
  }

  changeProduct(i){
    this.description = this.products[i].description;
    this.unit = this.products[i].unit;
    this.ncm = this.products[i].ncm;
    this.value = this.products[i].value;
    this.barcode = this.products[i].barcode;
    this.quantities = this.products[i].quantities;
    this.id = this.products[i].id;
  }

  clearProduct(){
    this.description = "";
    this.unit = "";
    this.ncm = "";
    this.value = "";
    this.barcode = "";
    this.quantities = "";
    this.id = "";
  }

}
