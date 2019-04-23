import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-sincronizer',
  templateUrl: './sincronizer.component.html',
  styleUrls: ['./sincronizer.component.scss']
})
export class SincronizerComponent implements OnInit {

  //laravel api config
  protected urlBackEnd = 'http://localhost:8000';
  protected client_secret = 'Aj9P3C3UkcRD9zszLV8Nfrd3YdW4qlyiq875r5wl';
  protected client_id = '2';
  protected grant_type = 'password';

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  getTokens(email, pass, callback, callbackError){
    this.post("/oauth/token", {
      grant_type: this.grant_type,
      client_id: this.client_id,
      client_secret: this.client_secret,
      username: email,
      password: pass
    }, callback, callbackError);
  }

  getDataUser(callback){
    this.get("/user", callback, null);
  }

  createNewUser(data, callback){
    this.put("/user", data, callback, null);
  }

  saveProduct(data, callback){
    if(data.id == ""){
      this.put("/product", data, callback, null);
    }else{
      this.post("/product/"+data.id, data, callback, null);
    }
  }

  getAllProducts(callback){
    this.get("/products", callback, null);
  }

  savePayment(data, callback){
    if(data.id == ""){
      this.put("/payment", data, callback, null);
    }else{
      this.post("/payment/"+data.id, data, callback, null);
    }
  }

  getAllPayments(callback){
    this.get("/payments", callback, null);
  }

  get(url, callback, callbackError){
    var token = localStorage.getItem('access_token');
    var header = new HttpHeaders().set('Content-Type', 'application/json');
    if(token){
      header = header.set('Authorization', 'Bearer '+token);
    }

    this.http.get(this.urlBackEnd+''+url, {
      headers: header
    }).subscribe(callback, callbackError);
  }

  post(url, data, callback, callbackError){
    var token = localStorage.getItem('access_token');
    var header = new HttpHeaders().set('Content-Type', 'application/json');
    if(token){
      header = header.set('Authorization', 'Bearer '+token);
    }

    this.http.post(this.urlBackEnd+''+url, data, {
      headers: header
    }).subscribe(callback, callbackError);
  }

  put(url, data, callback, callbackError){
    var token = localStorage.getItem('access_token');
    var header = new HttpHeaders().set('Content-Type', 'application/json');
    if(token){
      header = header.set('Authorization', 'Bearer '+token);
    }

    this.http.put(this.urlBackEnd+''+url, data, {
      headers: header
    }).subscribe(callback, callbackError);
  }

}
