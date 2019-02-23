import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';

const rotasLogin: Routes = [
    { path: '', component: LoginComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(rotasLogin),
        CommonModule
    ],
    exports:[
        RouterModule
    ]
})

export class LoginRoutingModule{}


