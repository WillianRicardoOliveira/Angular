import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { CriarPessoaComponent } from './componentes/pessoas/criar-pessoa/criar-pessoa.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListarPessoaComponent } from './componentes/pessoas/listar-pessoa/listar-pessoa.component';
import { PessoaComponent } from './componentes/pessoas/pessoa/pessoa.component';
import { HttpClientModule } from '@angular/common/http';
import { ExcluirPessoaComponent } from './componentes/pessoas/excluir-pessoa/excluir-pessoa.component';
import { EditarPessoaComponent } from './componentes/pessoas/editar-pessoa/editar-pessoa.component';
import { BotaoCarregarMaisComponent } from './componentes/pessoas/listar-pessoa/botao-carregar-mais/botao-carregar-mais.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { SucessoCadastroComponent } from './componentes/sucesso-cadastro/sucesso-cadastro.component';
import { MensagemComponent } from './componentes/mensagem/mensagem.component';
import { MaiorIdadeDirective } from './diretivas/maior-idade.directive';
import { ValidandoCepDirective } from './diretivas/validando-cep/validando-cep.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CabecalhoComponent,
    RodapeComponent,
    CriarPessoaComponent,
    ListarPessoaComponent,
    PessoaComponent,
    ExcluirPessoaComponent,
    EditarPessoaComponent,
    BotaoCarregarMaisComponent,
    UsuarioComponent,
    SucessoCadastroComponent,
    MensagemComponent,
    MaiorIdadeDirective,
    ValidandoCepDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // Configuração para execução bidirecional
    FormsModule,



    // Configuração para usar o Http
    HttpClientModule,

    // Configuração para realizar válidaçoes nos formulários
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
