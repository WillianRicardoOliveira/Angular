import { PessoaUsuaria } from '@/interface/interface';
import { Component } from '@angular/core';
import { BaseService } from '@services/base/base.service';
import { CadastroSiteService } from '@services/site/cadastro-site/cadastro-site.service';

@Component({
  selector: 'app-perfil-site',
  templateUrl: './perfil-site.component.html',
  styleUrls: ['./perfil-site.component.scss']
})
export class PerfilSiteComponent {

  perfilComponent = false

  constructor(private service: CadastroSiteService,
    
    private baseService: BaseService
    ) {}


  cadastrar() {

    const formCadastro = this.service.getCadastro()

    if(formCadastro?.valid) {
      const novoCadastro = formCadastro.getRawValue() as PessoaUsuaria
      this.baseService.post("cadastro", novoCadastro)
      .subscribe({
        next: (value) => {
          console.log("CADSTRAR PERFIL", value)
        },
        error: (err) => {
          console.log("Erro ao realizar cadastro", err)
        }
      })
    }
    

  }
}
