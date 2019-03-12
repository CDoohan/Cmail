import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EmailService } from 'src/app/services/email.service';
import { PageDataService } from '../../services/page.service';
import { HeaderDataService } from '../../services/header.service';

@Component({
  selector: 'app-caixa-de-entrada',
  templateUrl: './caixa-de-entrada.component.html',
  styleUrls: ['./caixa-de-entrada.component.css']
})
export class CaixaDeEntradaComponent implements OnInit {
  
  private _isNewEmailFormOpen = false
  termoParaFiltro = ''

  //envio do email
  emailList = []
  email = {
    destinatario: '',
    assunto: '',
    conteudo: '',
    id: ''
  }

  constructor(
    private emailService: EmailService,
    private pageDataService: PageDataService,
    private headerService: HeaderDataService,
    private router: Router
    ){ }//Injetar o EmailService

  ngOnInit() {
    this.emailService
        .listar()
        .subscribe(
          (lista) => {
            this.emailList = lista
          }
        )
    
    this.pageDataService.defineTitulo('Inbox - Cmail');

    //A partir do momento que o headerService fizer um .emit()
    //o .subscribe() irá resolver o que tiver dentro dele
    this.headerService.valorDoFiltro.subscribe(
      novoValor => this.termoParaFiltro = novoValor 
    )
  }

  //Function que escreve o novo e-mail
  // O email, quando digitado ja é alterado seus valores automaticamente atraveś do (input)
  // Portanto, basta somente fazer um push desse email para o emailList
  handleNewEmail(formEmail : NgForm) {

    if( formEmail.invalid ) return;
    
    // this.emailList.push(this.email)

    this.emailService
        .enviar(this.email)
        .subscribe(
          emailApi => {
            this.emailList.push(emailApi)
            this.email = { destinatario: '', assunto: '', conteudo: '', id: '' }
            formEmail.reset()
          },
          erro => console.log(erro)
        )
  }

  get isNewEmailFormOpen() {
    return this._isNewEmailFormOpen
  }

  toggleNewEmailForm() {
    this._isNewEmailFormOpen = !this._isNewEmailFormOpen
  }

  handleRemoveEmail(eventoVaiRemover, emailId){
    console.log('clicou');

    if ( eventoVaiRemover.status === 'removing' ){
      this.emailService
          .deletar(emailId)
          .subscribe(
            res => {
              console.log(res);

              this.emailList = this.emailList.filter(email => email.id != emailId);
            },
            err => console.log(err)
          )
    }
  }

  filtrarEmailsPorAssunto() {

    const termoParaFiltroEmMinusculo = this.termoParaFiltro.toLowerCase();

    return this.emailList.filter( email => {

      const assunto = email.assunto.toLowerCase()

      return assunto.includes(termoParaFiltroEmMinusculo);

    })

  }

  emailPage(goToEmail, id: number){
    if ( goToEmail.status === 'clicked' ){
      this.router.navigate(['/inbox', id]);
    }
  }

}
