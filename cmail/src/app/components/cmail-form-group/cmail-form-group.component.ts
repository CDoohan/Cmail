import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'cmail-form-group',
  templateUrl: './cmail-form-group.component.html',
  styles: []
})
export class CmailFormGroupComponent implements OnInit {

  textoDaLabel = '';
  idCampo      = '';

  // PRIVATE = PARA USAR EM TODA CLASSE
  // ELEMTENT: TIPO-INJETÁVEL ( como não instanciamos o nosso component no html e sim em outros componentes, precisamos instanciar ele como um tipo Injectable para quando chamarem ele, ele já estar instanciado )
  constructor(private elemento: ElementRef) { }

  ngOnInit() {

    const campo = this.elemento.nativeElement.querySelector('input')
    this.textoDaLabel = campo.name.replace(campo.name[0], campo.name[0].toUpperCase());
    this.idCampo = campo.name;

  }

}
