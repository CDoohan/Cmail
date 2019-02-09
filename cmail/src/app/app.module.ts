import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ModuloRoteamento } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { CadastroComponent } from './modules/cadastro/cadastro.component';
import { CaixaDeEntradaComponent } from './modules/caixa-de-entrada/caixa-de-entrada.component';
import { CmailFormGroupComponent } from './components/cmail-form-group/cmail-form-group.component';
import { CmailFormFieldDirective } from './components/cmail-form-group/cmail-form-field.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    CadastroComponent,
    CaixaDeEntradaComponent,
    CmailFormGroupComponent,
    CmailFormFieldDirective
  ],
  imports: [
    BrowserModule,
    ModuloRoteamento,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
