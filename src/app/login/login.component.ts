import { Component, OnInit, ViewChild } from '@angular/core';
import { SincronizerComponent } from '../sincronizer/sincronizer.component';
import { Router } from '@angular/router'
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public email = "";
  public password = "";
  public nameLogin = "";
  errorMessage = "";
  logado = false;

  @ViewChild('falseLogin') private falseLogin: SwalComponent;

  constructor(private sinc: SincronizerComponent, private router: Router) { }

  ngOnInit() {
    var logado = localStorage.getItem('login');

    if(logado){
      if(logado == 'true'){
        this.logado = true;
        this.getDataUser();
      }
    }
  }

  getUserLogin(){
    this.sinc.getTokens(this.email, this.password, (data) => {
      localStorage.setItem('access_token', data.access_token);
      localStorage.setItem('refresh_token', data.refresh_token);
      localStorage.setItem('login', 'true');     

      this.router.navigate(['/']);
      this.logado = true;
    }, (error) => {
      this.falseLogin.show();
    });
  }

  getDataUser(){
    this.sinc.getDataUser((data) => {
      this.nameLogin = data.data.name;
      localStorage.setItem('userData', JSON.stringify(data.data));
    });
  }

  quitUser(){
    localStorage.setItem('access_token', "");
    localStorage.setItem('refresh_token', "");
    localStorage.setItem('login', 'false');
    localStorage.setItem('userData', '');

    location.reload();
  }

}
