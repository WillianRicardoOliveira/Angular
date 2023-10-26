import { PessoaUsuario } from '@/interfaces/interfaces';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CadastroService } from '@services/site/cadastro/cadastro.service';
import { TokenService } from '@services/token/token.service';
import { UserService } from '@services/user/user.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  titulo = "Olá, "
  textoBotao = "Atualizar"
  perfilComponent = true

  id: number
  nome: string
  cadastro!: PessoaUsuario
  form: FormGroup | null

  constructor(
    private userService: UserService,
    private cadastroService: CadastroService,
    private router: Router
    ) {}
  
  ngOnInit(): void {
    this.userService.retornarUser().subscribe(pessoa => {
      this.id = pessoa.id
      this.cadastroService.detalhar(pessoa.id).subscribe(cadastro => {
        this.cadastro = cadastro
        this.nome = cadastro.nome
        this.carregarFormulario()
      })  
    })
    
  }

  carregarFormulario() {

    console.log("CADSTRO ::: ", this.cadastro)


    this.form = this.cadastroService.getCadastro()
    this.form?.patchValue({
        nome: this.cadastro.nome,
        nascimento: this.cadastro.nascimento,
        genero: this.cadastro.genero,
        cpf: this.cadastro.cpf,
        telefone: this.cadastro.telefone,

        logradouro: this.cadastro.endereco.logradouro,
        bairro: this.cadastro.endereco.bairro,
        cep: this.cadastro.endereco.cep,
        //estado: this.cadastro.estado,
        cidade: this.cadastro.endereco.cidade,
        numero: this.cadastro.endereco.numero,
        complemento: this.cadastro.endereco.complemento
    })
  }






  atualizar() {
    const dadosAtualizados = {
      id: this.id,
      nome: this.form?.value.nome,
      nascimento: this.form?.value.nascimento,
      genero: this.form?.value.genero,
      cpf: this.form?.value.cpf,
      telefone: this.form?.value.telefone,
      
      logradouro: this.form?.value.endereco.logradouro,
      bairro: this.form?.value.endereco.bairro,
      cep: this.form?.value.endereco.cep,
      //estado: this.cadastro.estado,
      cidade: this.form?.value.endereco.cidade,
      numero: this.form?.value.endereco.numero,
      complemento: this.form?.value.endereco.complemento
    }

    this.cadastroService.atualizar(dadosAtualizados).subscribe({
      next: (value) => {
        this.router.navigateByUrl("/")
      },
      error: (err) => {
      
      }
    })

  }

  deslogar() {
    this.userService.logout()
    this.router.navigate(["/login"])
  }

}
