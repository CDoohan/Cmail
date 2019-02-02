import { Component } from '@angular/core';

@Component({
    selector: 'cmail-header',
    templateUrl: './header.component.html',
    styleUrls: [
        './header.component.css',
        './header-search.css'
    ]
})

export class HeaderComponent {

    // O '_' é nomenclatura para um private
    private _isMenuOpen = false

    //get declara os métodos quando se tenta puxar o valor isMenuOpen
    get isMenuOpen() {
        return this._isMenuOpen
    }

    toggleMenu() {
        //INVERTE O VALOR DA PROPRIEDADE
        this._isMenuOpen = !this.isMenuOpen
    }

 }