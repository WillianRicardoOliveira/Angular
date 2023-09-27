import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../pessoa';
import { PessoaService } from '../pessoa.service';
import { Router, Routes } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-criar-pessoa',
  templateUrl: './criar-pessoa.component.html',
  styleUrls: ['./criar-pessoa.component.css']
})
export class CriarPessoaComponent implements OnInit {

/*
  pessoa: Pessoa = {
    //id: 1,
    conteudo: '',
    autoria: '',
    modelo: 'modelo1'
  }
*/


  formulario!: FormGroup;





  constructor(
    private service: PessoaService,
    private router: Router,

    private formBuilder: FormBuilder



    ) { }

  ngOnInit(): void {

    // https://angular.io/api/forms/Validators#description

    this.formulario = this.formBuilder.group({

      conteudo: ['', Validators.compose(
          [
            Validators.required,
            Validators.pattern(/(.|\s)*\S(.|\s)*/) // Não permite que seja colocado apenas espaços
          
          
          ])],
      autoria: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])],
      modelo: ['modelo1'],
      favorito: [false]

    })

  }

  salvar(){

    console.log(this.formulario.get('autoria')?.errors)

    if(this.formulario.valid) {

      this.service.criar(this.formulario.value).subscribe(() => {

        this.router.navigate(['/listarPessoa'])

      })
    }

  }

  cancelar(){

    this.router.navigate(['/listarPessoa'])

  }


  habilitarBotao(): string {

    if(this.formulario.valid) {

      return 'botao'

    } else {

      return 'botao__desabilitado'

    }

  }

}
