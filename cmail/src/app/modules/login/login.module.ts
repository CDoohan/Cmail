import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { SharedComponentModule } from 'src/app/components/shared-components.module';
import { CmailFormModule } from 'src/app/components/cmail-form-group/cmail-form.module';
import { LoginService } from 'src/app/services/login.service';

@NgModule({
    declarations: [
        LoginComponent,
    ],
    imports:[
        CommonModule,
        CmailFormModule,
        FormsModule
    ],
    exports:[
        LoginComponent
    ],
    //Providers auto gerenciam os objetos do tipo Injectable,
    //Assim, quando o componente não for usado
    //A instancia será removida
    providers:[
        LoginService
    ]
})

export class LoginModule{}