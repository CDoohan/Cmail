import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cmail-list-item',
  templateUrl: './cmail-list-item.component.html',
  styles: ['./cmail-list-item.component.css']
})
export class CmailListItemComponent implements OnInit {

  @Input() destinatario = '';
  @Input() assunto = '';
  @Input() introducaoDoConteudo = '';
  @Input() dataDeEnvio = '';
  @Input() id = '';
  @Output('eventoVaiRemover') vaiRemover = new EventEmitter();
  @Output('goToEmail') irEmail = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  removeEmail(click: Event){
    console.log('botao clicado');

    if( confirm('Tem certeza?') ){
      this.vaiRemover.emit({ status: 'removing' })
    }
  }

  goToEmail(click: Event, emailId: string){
    console.log('Email ID:', emailId);

    this.irEmail.emit({ status: 'clicked' });
  }

}
