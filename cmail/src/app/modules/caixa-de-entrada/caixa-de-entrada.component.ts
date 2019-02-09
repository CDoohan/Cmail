import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-caixa-de-entrada',
  templateUrl: './caixa-de-entrada.component.html',
  styleUrls: ['./caixa-de-entrada.component.css']
})
export class CaixaDeEntradaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private _isNewEmailFormOpen = false

  //envio do email
  emailList = []
  email = {
    destinatario: '',
    assunto: '',
    conteudo: ''
  }

  //Function que escreve o novo e-mail
  // O email, quando digitado ja é alterado seus valores automaticamente atraveś do (input)
  // Portanto, basta somente fazer um push desse email para o emailList
  handleNewEmail(formEmail : NgForm) {

    if( formEmail.invalid ) return;
    
    this.emailList.push(this.email)

    this.email = {
      destinatario: '',
      assunto: '',
      conteudo: ''
    }

    formEmail.reset()
    
  }

  get isNewEmailFormOpen() {
    return this._isNewEmailFormOpen
  }

  toggleNewEmailForm() {
    this._isNewEmailFormOpen = !this._isNewEmailFormOpen
  }

}
