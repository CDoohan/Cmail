import { Component, OnInit } from '@angular/core';
import { PageDataService } from '../../../services/page.service';
import { ActivatedRoute } from '@angular/router';
import { EmailService } from "../../../services/email.service";

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  id: any;
  private sub: any;
  email;
  tituloPage: string;
  private _isStarClicked = false;

  constructor(
    private pageDataService: PageDataService,
    private route: ActivatedRoute,
    private emailService: EmailService
  ){ }

  ngOnInit() {
    //TITULO DA PAGINA N APARECE
    this.pageDataService.defineTitulo('Email');

    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.emailService
    .listar()
    .subscribe(
      (lista) => {

        this.email = lista.filter(email => email.id === this.id);
        this.tituloPage = this.email[0].assunto;

        //TITULO DA PAGINA N APARECE
        this.pageDataService.defineTitulo(this.tituloPage);
        console.log('email', this.email);
      }
    )
  }

  get isStarClicked() {
    return this._isStarClicked
  }

  toggleStar() {
    this._isStarClicked = !this._isStarClicked
  }

}
