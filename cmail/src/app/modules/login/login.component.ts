import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from "src/app/services/login.service";
import { PageDataService } from '../../services/page.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mensagemErro;

  login = { email: '', password:'' }

  constructor( private loginService: LoginService, private roteador: Router, private pageDataService: PageDataService ) { }

  ngOnInit() { 
    this.pageDataService.defineTitulo('Login - Cmail');    
  }

  handleLogin(formLogin: NgForm){
    if( formLogin.valid ){
      this.loginService
          .logar(this.login)
          .subscribe(
            () => this.roteador.navigate(['/inbox'])
            ,(responseError: HttpErrorResponse ) => this.mensagemErro = responseError.error.message
          )
    }
  }

}
