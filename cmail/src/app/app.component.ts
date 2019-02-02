import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

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
  handleNewEmail(event : Event) {
    event.preventDefault();
    
    this.emailList.push(this.email)
  }

  get isNewEmailFormOpen() {
    return this._isNewEmailFormOpen
  }

  toggleNewEmailForm() {
    this._isNewEmailFormOpen = !this._isNewEmailFormOpen
  }

}
