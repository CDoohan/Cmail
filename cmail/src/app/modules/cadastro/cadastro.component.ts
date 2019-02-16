import { Component, OnInit, ɵConsole } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpResponseBase, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from "rxjs/operators";
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  mensagensErro;

  formCadastro = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)] ),
    username: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    senha: new FormControl('', [Validators.required]),
    telefone: new FormControl('', [Validators.required, Validators.pattern('[0-9]{5}-?[0-9]{4}[0-9]?')] ),
    avatar: new FormControl('', [Validators.required], this.validaImagem.bind(this)),
  })

  validaImagem(campoDoFormulario: FormControl){
    return this.httpClient
                .head(
                  campoDoFormulario.value,{
                    observe: 'response'
                  }
                )
                .pipe(
                  map((response: HttpResponseBase) => {
                    console.log('RESPONSE',response);
                    return response.ok ? null : { urlInvalida: true }
                  }),
                  catchError((error) => {
                    console.log('ERROR',error);
                    return [{ urlInvalida: true }]
                  })
                )
  }

  handleCadastrarUsuario(){

    if( this.formCadastro.valid ){
      const userData = new User(this.formCadastro.value);

      this.httpClient
      .post('http://localhost:3200/users', userData)
      .subscribe(
        (response) => {
          console.log('Cadastro com sucesso!');
          this.formCadastro.reset();

          //REDIRECIONAMENTO PARA TELA DE LOGIN
          setTimeout(()=>{
            this.roteador.navigate(['']);
          }, 1000)
        },
        (responseError : HttpErrorResponse) => {
          this.mensagensErro = responseError.error.body
        }
      )

    }else{
      console.log('Campos precisam ser preenchidos');
      this.validarTodosOsCamposDoFormulario(this.formCadastro);
    }

  }

  validarTodosOsCamposDoFormulario( form: FormGroup ){

    Object.keys(form.controls).forEach(field => {
      const control = form.get(field);
      control.markAsTouched({ onlySelf : true });
    })

  }

  constructor( private httpClient: HttpClient, private roteador: Router) { }


  ngOnInit() {
    
  }

}
