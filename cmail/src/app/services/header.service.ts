import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class HeaderDataService {

    valorDoFiltro = new EventEmitter<string>();

    //Quando carregar a pagina, o termo de filtro será nulo
    constructor(){
        this.atualizarTermoDeFiltro('');
    }

    //O atualizarTermoDeFiltro irá emitir o novo valor que
    //será escutado em Caixa de Entrada.ts
    atualizarTermoDeFiltro(novoValor: string){
        this.valorDoFiltro.emit(novoValor);
    }

}