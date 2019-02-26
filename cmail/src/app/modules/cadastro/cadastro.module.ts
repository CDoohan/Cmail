import { NgModule } from "@angular/core";
import { CadastroComponent } from "./cadastro.component";
import { CmailFormModule } from 'src/app/components/cmail-form-group/cmail-form.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedComponentModule } from 'src/app/components/shared-components.module';
import { CadastroRoutingModule } from './cadastro-routing.module';


@NgModule({
    declarations: [
        CadastroComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SharedComponentModule,
        CmailFormModule, //EXTRA EXERCICIO 6 CAPITULO 16
        CadastroRoutingModule
    ],
    exports: [
        CadastroComponent
    ]
})

export class CadastroModule { }
