import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CaixaDeEntradaRoutingModule } from './caixa-de-entrada-routing.module';
import { CaixaDeEntradaComponent } from './caixa-de-entrada.component';
import { EmailComponent } from './email/email.component';
import { SharedComponentModule } from 'src/app/components/shared-components.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        CaixaDeEntradaComponent,
        EmailComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        CaixaDeEntradaRoutingModule,
        SharedComponentModule,
        FormsModule
    ],
    exports: [
        CaixaDeEntradaComponent,
        EmailComponent
    ]
})

export class CaixaDeEntradaModule { }
