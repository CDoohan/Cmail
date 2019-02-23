import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { SharedComponentModule } from 'src/app/components/shared-components.module';
import { CmailFormModule } from 'src/app/components/cmail-form-group/cmail-form.module';

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
    ]
})

export class LoginModule{}