import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from '@modules/main/main.component';
import {BlankComponent} from '@pages/blank/blank.component';
import {LoginComponent} from '@modules/login/login.component';
import {ProfileComponent} from '@pages/profile/profile.component';
import {RegisterComponent} from '@modules/register/register.component';
import {DashboardComponent} from '@pages/dashboard/dashboard.component';
import {AuthGuard} from '@guards/auth.guard';
import {NonAuthGuard} from '@guards/non-auth.guard';
import {ForgotPasswordComponent} from '@modules/forgot-password/forgot-password.component';
import {RecoverPasswordComponent} from '@modules/recover-password/recover-password.component';
import {MainMenuComponent} from '@pages/main-menu/main-menu.component';
import {SubMenuComponent} from '@pages/main-menu/sub-menu/sub-menu.component';
import { CriarUsuarioComponent } from '@pages/usuario/criar-usuario/criar-usuario.component';
import { ListarUsuarioComponent } from '@pages/usuario/listar-usuario/listar-usuario.component';
import { ExcluirComponent } from '@components/excluir/excluir.component';
import { EditarUsuarioComponent } from '@pages/usuario/editar-usuario/editar-usuario.component';

import { ListarFornecedorComponent } from '@pages/estoque/cadastro/fornecedor/listar-fornecedor/listar-fornecedor.component';
import { CriarFornecedorComponent } from '@pages/estoque/cadastro/fornecedor/criar-fornecedor/criar-fornecedor.component';
import { EditarFornecedorComponent } from '@pages/estoque/cadastro/fornecedor/editar-fornecedor/editar-fornecedor.component';
import { EditarProdutoComponent } from '@pages/estoque/cadastro/produto/editar-produto/editar-produto.component';
import { CriarProdutoComponent } from '@pages/estoque/cadastro/produto/criar-produto/criar-produto.component';
import { ListarProdutoComponent } from '@pages/estoque/cadastro/produto/listar-produto/listar-produto.component';


const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        children: [
            {
                path: 'profile',
                component: ProfileComponent
            },
            {
                path: 'blank',
                component: BlankComponent
            },
            {
                path: 'sub-menu-1',
                component: SubMenuComponent
            },
            {
                path: 'lista-usuario',
                component: ListarUsuarioComponent
            },
            {
              path: 'criar-usuario',
              component: CriarUsuarioComponent
            },
            {
              path: 'editar-usuario/:id',
              component: EditarUsuarioComponent
            },


            /* MODULO ESTOQUE */
            { path: 'listar-fornecedor', component: ListarFornecedorComponent },
            { path: 'criar-fornecedor', component: CriarFornecedorComponent },
            { path: 'editar-fornecedor/:id', component: EditarFornecedorComponent },

            { path: 'listar-produto', component: ListarProdutoComponent },
            { path: 'criar-produto', component: CriarProdutoComponent },
            { path: 'editar-produto/:id', component: EditarProdutoComponent },




            {
                path: '',
                component: DashboardComponent
            }
        ]
    },


/*
    {
      path: "excluir/:id",
      component: ExcluirComponent
    },
*/


    {
        path: 'login',
        component: LoginComponent,
        canActivate: [NonAuthGuard]
    },
    {
        path: 'register',
        component: RegisterComponent,
        canActivate: [NonAuthGuard]
    },
    {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
        canActivate: [NonAuthGuard]
    },
    {
        path: 'recover-password',
        component: RecoverPasswordComponent,
        canActivate: [NonAuthGuard]
    },
    {path: '**', redirectTo: ''}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
