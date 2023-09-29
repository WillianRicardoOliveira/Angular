import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPessoaComponent } from './componentes/pessoas/criar-pessoa/criar-pessoa.component';
import { ListarPessoaComponent } from './componentes/pessoas/listar-pessoa/listar-pessoa.component';
import { ExcluirPessoaComponent } from './componentes/pessoas/excluir-pessoa/excluir-pessoa.component';
import { EditarPessoaComponent } from './componentes/pessoas/editar-pessoa/editar-pessoa.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { SucessoCadastroComponent } from './componentes/sucesso-cadastro/sucesso-cadastro.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'usuario',
    pathMatch: 'full'
  },


  {
    path: 'criarPessoa',
    component: CriarPessoaComponent
  },

  {
    path: 'listarPessoa',
    component: ListarPessoaComponent
  },




  {
    path: 'pessoas/excluirPessoa/:id',
    component: ExcluirPessoaComponent
  },

  {
    path: 'pessoas/editarPessoa/:id',
    component: EditarPessoaComponent
  },




// ROTAS PARA O CADASTRO DE USUÁRIOS

  {
    path: 'usuario',
    component: UsuarioComponent
  },
  {
    path: 'sucesso',
    component: SucessoCadastroComponent
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
