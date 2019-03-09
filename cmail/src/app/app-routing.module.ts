import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CaixaDeEntradaComponent } from './modules/caixa-de-entrada/caixa-de-entrada.component';
import { LoginComponent } from './modules/login/login.component';
import { AuthGuard } from "./guards/auth.guard";

const routes: Routes = [
  { path: '', loadChildren:'src/app/modules/login/login.module#LoginModule' },
  { path: 'inbox', loadChildren: 'src/app/modules/caixa-de-entrada/caixa-de-entrada.module#CaixaDeEntradaModule', canActivate: [AuthGuard] },
  { path: 'cadastro', loadChildren: 'src/app/modules/cadastro/cadastro.module#CadastroModule' },
  { path: '**', redirectTo: 'inbox' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ AuthGuard ]
})
export class ModuloRoteamento { }
