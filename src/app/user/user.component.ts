import { Component, OnInit, ViewChild } from '@angular/core';
import { SincronizerComponent } from '../sincronizer/sincronizer.component';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  name = "";
  email = "";
  password = "";
  repassword = "";
  messageError = "";
  messageSuccess = "";

  @ViewChild('messageSuccessSwal') private messageSuccessSwal: SwalComponent
  @ViewChild('messageErrorSwal') private messageErrorSwal: SwalComponent

  constructor(private sinc: SincronizerComponent, private router: Router) { }

  ngOnInit() {
  }

  sendUser(){
    if(this.name == ""){
      this.showMessageError("É necessário um nome.");
      return;
    }

    if(this.email == ""){
      this.showMessageError("É necessário um email.");
      return;
    }

    if(this.password == ""){
      this.showMessageError("É necessário uma senha.");
      return;
    }

    if(this.repassword == ""){
      this.showMessageError("Digite novamente a senha.");
      return;
    }

    if(this.password != this.repassword){
      this.showMessageError("As senhas não correspondem.");
      return;
    }

    this.sinc.createNewUser({
      name: this.name,
      email: this.email,
      password: this.password
    }, (data) => {
      if(data.status){
        this.showMessageSuccess("Usuário cadastrado com sucesso, realize o login para continuar.");
        this.router.navigate(['/']);
      }else{
        this.showMessageError("Esse e-mail já está cadastrado em nosso sistema.");
      }      
    });

  }

  showMessageError(message){
    this.messageError = message;
    this.messageErrorSwal.show();
  }

  showMessageSuccess(message){
    this.messageSuccess = message;
    this.messageSuccessSwal.show();
  }
}
