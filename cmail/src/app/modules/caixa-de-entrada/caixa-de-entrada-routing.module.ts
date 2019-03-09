import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CaixaDeEntradaComponent } from './caixa-de-entrada.component';
import { EmailComponent } from './email/email.component';

const rotasCaixaDeEntrada: Routes = [
    { path: '', component: CaixaDeEntradaComponent },
    { path: ':id', component: EmailComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(rotasCaixaDeEntrada)
    ],
    exports:[
        RouterModule
    ]
})

export class CaixaDeEntradaRoutingModule{}

