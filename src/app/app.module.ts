import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from '@/app-routing.module';
import {AppComponent} from './app.component';
import {MainComponent} from '@modules/main/main.component';
import {LoginComponent} from '@modules/login/login.component';
import {HeaderComponent} from '@modules/main/header/header.component';
import {FooterComponent} from '@modules/main/footer/footer.component';
import {MenuSidebarComponent} from '@modules/main/menu-sidebar/menu-sidebar.component';
import {BlankComponent} from '@pages/blank/blank.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ProfileComponent} from '@pages/profile/profile.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RegisterComponent} from '@modules/register/register.component';
import {DashboardComponent} from '@pages/dashboard/dashboard.component';
import {ToastrModule} from 'ngx-toastr';
import {MessagesComponent} from '@modules/main/header/messages/messages.component';
import {NotificationsComponent} from '@modules/main/header/notifications/notifications.component';

import {CommonModule, registerLocaleData} from '@angular/common';
import localeEn from '@angular/common/locales/en';
import {UserComponent} from '@modules/main/header/user/user.component';
import {ForgotPasswordComponent} from '@modules/forgot-password/forgot-password.component';
import {RecoverPasswordComponent} from '@modules/recover-password/recover-password.component';
import {LanguageComponent} from '@modules/main/header/language/language.component';
import {MainMenuComponent} from './pages/main-menu/main-menu.component';
import {SubMenuComponent} from './pages/main-menu/sub-menu/sub-menu.component';
import {MenuItemComponent} from './components/menu-item/menu-item.component';
import {ControlSidebarComponent} from './modules/main/control-sidebar/control-sidebar.component';
import {StoreModule} from '@ngrx/store';
import {authReducer} from './store/auth/reducer';
import {uiReducer} from './store/ui/reducer';
import {ProfabricComponentsModule} from '@profabric/angular-components';
import {SidebarSearchComponent} from './components/sidebar-search/sidebar-search.component';

import { GridComponent } from './components/grid/grid.component';
import { ExcluirComponent } from './components/excluir/excluir.component';

import { CriarUsuarioComponent } from './pages/usuario/criar-usuario/criar-usuario.component';
import { ListarUsuarioComponent } from './pages/usuario/listar-usuario/listar-usuario.component';
import { EditarUsuarioComponent } from './pages/usuario/editar-usuario/editar-usuario.component';
import { FormularioValidacaoComponent } from './components/formulario-validacao/formulario-validacao.component';
import { EditarComponent } from './components/editar/editar.component';
import { CabecalhoPaginaComponent } from './components/cabecalho-pagina/cabecalho-pagina.component';
import { InformacaoComponent } from './components/dashboard/informacao/informacao.component';
import { SucessoComponent } from './components/dashboard/sucesso/sucesso.component';
import { AvisoComponent } from './components/dashboard/aviso/aviso.component';
import { PerigoComponent } from './components/dashboard/perigo/perigo.component';



/* MODULO DE ETOQUE */
import { CriarProdutoComponent } from './pages/estoque/cadastro/produto/criar-produto/criar-produto.component';
import { EditarProdutoComponent } from './pages/estoque/cadastro/produto/editar-produto/editar-produto.component';
import { ListarProdutoComponent } from './pages/estoque/cadastro/produto/listar-produto/listar-produto.component';
import { CriarFornecedorComponent } from './pages/estoque/cadastro/fornecedor/criar-fornecedor/criar-fornecedor.component';
import { EditarFornecedorComponent } from './pages/estoque/cadastro/fornecedor/editar-fornecedor/editar-fornecedor.component';
import { ListarFornecedorComponent } from './pages/estoque/cadastro/fornecedor/listar-fornecedor/listar-fornecedor.component';



registerLocaleData(localeEn, 'en-EN');

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        LoginComponent,
        HeaderComponent,
        FooterComponent,
        MenuSidebarComponent,
        BlankComponent,
        ProfileComponent,
        RegisterComponent,
        DashboardComponent,
        MessagesComponent,
        NotificationsComponent,
        UserComponent,
        ForgotPasswordComponent,
        RecoverPasswordComponent,
        LanguageComponent,
        MainMenuComponent,
        SubMenuComponent,
        MenuItemComponent,
        ControlSidebarComponent,
        SidebarSearchComponent,


        GridComponent,

        CriarUsuarioComponent,
        ListarUsuarioComponent,
        EditarUsuarioComponent,
        ExcluirComponent,
        FormularioValidacaoComponent,
        EditarComponent,
        CabecalhoPaginaComponent,
        InformacaoComponent,
        SucessoComponent,
        AvisoComponent,
        PerigoComponent,

       
        /* MODULO DE ETOQUE */
        CriarProdutoComponent,
        EditarProdutoComponent,
        ListarProdutoComponent,
        CriarFornecedorComponent,
        EditarFornecedorComponent,
        ListarFornecedorComponent,


    ],
    imports: [
        ProfabricComponentsModule,
        CommonModule,
        BrowserModule,
        StoreModule.forRoot({auth: authReducer, ui: uiReducer}),
        HttpClientModule,
        AppRoutingModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot({
            timeOut: 3000,
            positionClass: 'toast-top-right',
            preventDuplicates: true
        }),



        // WillianOliveira
        HttpClientModule,
        ReactiveFormsModule

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}