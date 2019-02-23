import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CaixaDeEntradaComponent } from './modules/caixa-de-entrada/caixa-de-entrada.component';
import { LoginComponent } from './modules/login/login.component';
// import { CadastroComponent } from './modules/cadastro/cadastro.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'inbox', component: CaixaDeEntradaComponent },
  { path: 'cadastro', loadChildren: 'src/app/modules/cadastro/cadastro.module#CadastroModule' },
  { path: '**', redirectTo: 'inbox' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ModuloRoteamento { }
