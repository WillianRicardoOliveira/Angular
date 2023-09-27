import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../pessoa';
import { PessoaService } from '../pessoa.service';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-criar-pessoa',
  templateUrl: './criar-pessoa.component.html',
  styleUrls: ['./criar-pessoa.component.css']
})
export class CriarPessoaComponent implements OnInit {


  pessoa: Pessoa = {
    //id: 1,
    conteudo: '',
    autoria: '',
    modelo: 'modelo1'
  }

  constructor(
    private service: PessoaService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  salvar(){
    this.service.criar(this.pessoa).subscribe(() => {

      this.router.navigate(['/listarPessoa'])

    })

  }

  cancelar(){

    this.router.navigate(['/listarPessoa'])

  }

}
