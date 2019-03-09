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
import { LoginModule } from './modules/login/login.module';
import { CmailFormModule } from './components/cmail-form-group/cmail-form.module';
import { AuthGuard } from "src/app/guards/auth.guard";
import { FiltroPorAssunto } from './modules/caixa-de-entrada/filtro-por-assunto.pipe'
import { CaixaDeEntradaModule } from './modules/caixa-de-entrada/caixa-de-entrada.module';

@NgModule({
  declarations: [
    AppComponent,
    // LoginComponent, RETIRADO NO EXERCICIO 7 CAP17
    // CaixaDeEntradaComponent, Retirado a partir do momento que criamos  CaixaDeEntradaModule
    FiltroPorAssunto
  ],
  imports: [
    BrowserModule,
    ModuloRoteamento,
    FormsModule,
    RouterModule/* NÃO ESTÁ NA APOSTILA */,
    HttpClientModule,
    // CadastroModule, RETIRADO NO CAP17 PAG 69
    SharedComponentModule,
    LoginModule,
    CmailFormModule,
    CaixaDeEntradaModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
