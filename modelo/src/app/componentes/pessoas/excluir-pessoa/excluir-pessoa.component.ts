import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../pessoa';
import { PessoaService } from '../pessoa.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-excluir-pessoa',
  templateUrl: './excluir-pessoa.component.html',
  styleUrls: ['./excluir-pessoa.component.css']
})
export class ExcluirPessoaComponent implements OnInit {


  pessoa: Pessoa = {

    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''

  }

  constructor(

    private service: PessoaService,

    private router: Router,

    // Fornece informações 
    private route: ActivatedRoute

  ) { }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id')

    this.service.buscarPorId(parseInt(id!)).subscribe((pessoa) => {

      this.pessoa = pessoa

    })
  }

  excluirPessoa() {

    if(this.pessoa.id) {
        this.service.excluir(this.pessoa.id).subscribe(() => {


  
      
          this.router.navigate(['listarPessoa'])
        })

      }
  }

  cancelar() {

    this.router.navigate(['listarPessoa'])

  }

}
