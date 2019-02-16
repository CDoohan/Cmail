import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { ModuloRoteamento } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';

import { LoginComponent } from './modules/login/login.component';
import { CaixaDeEntradaComponent } from './modules/caixa-de-entrada/caixa-de-entrada.component';
import { CadastroModule } from './modules/cadastro/cadastro.module';
import { SharedComponentModule } from './components/shared-components.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CaixaDeEntradaComponent,
  ],
  imports: [
    BrowserModule,
    ModuloRoteamento,
    FormsModule,
    RouterModule/* NÃO ESTÁ NA APOSTILA */,
    HttpClientModule,
    CadastroModule,
    SharedComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
