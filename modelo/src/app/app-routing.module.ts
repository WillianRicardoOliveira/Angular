import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPessoaComponent } from './componentes/pessoas/criar-pessoa/criar-pessoa.component';
import { ListarPessoaComponent } from './componentes/pessoas/listar-pessoa/listar-pessoa.component';
import { ExcluirPessoaComponent } from './componentes/pessoas/excluir-pessoa/excluir-pessoa.component';
import { EditarPessoaComponent } from './componentes/pessoas/editar-pessoa/editar-pessoa.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'listarPessoa',
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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
