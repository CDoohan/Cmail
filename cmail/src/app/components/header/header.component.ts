import { Component, OnInit } from '@angular/core';
import { PageDataService } from '../../services/page.service';
import { HeaderDataService } from '../../services/header.service';
 
@Component({
    selector: 'cmail-header',
    templateUrl: './header.component.html',
    styleUrls: [
        './header.component.css',
        './header-search.css'
    ]
})

export class HeaderComponent implements OnInit{

    // O '_' é nomenclatura para um private
    private _isMenuOpen = false

    tituloDaPagina = 'CMail';
    user = {
        avatar: '',
        nome: '',
        email: ''
    }

    //Injeção de PageDataService
    constructor(
        private pageService: PageDataService,
        private headerService: HeaderDataService
        ){
        //assinando titulo de PageDataService
        //quando o component for carregado, o eventemitter será acionado
        // e o subscribe será feito
        this.pageService.titulo.subscribe(
            novoTitulo => this.tituloDaPagina = novoTitulo
        )
    }

    ngOnInit() {
        if( localStorage.getItem('USER') ){
            let item = JSON.parse(localStorage.getItem('USER'));

            this.user = {
                avatar: item.imagem,
                nome: item.nome,
                email: item.email
            }

            return this.user;
        }
    }

    //get declara os métodos quando se tenta puxar o valor isMenuOpen
    get isMenuOpen() {
        return this._isMenuOpen
    }

    toggleMenu() {
        //INVERTE O VALOR DA PROPRIEDADE
        this._isMenuOpen = !this.isMenuOpen
    }

    handleBuscaChanges({target}){//PQ EM {} ? está pegando somente o atributo target do objeto Event ?
        this.headerService.atualizarTermoDeFiltro(target.value);
    }

 }