import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../pessoa';
import { PessoaService } from '../pessoa.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-pessoa',
  templateUrl: './editar-pessoa.component.html',
  styleUrls: ['./editar-pessoa.component.css']
})
export class EditarPessoaComponent implements OnInit {

  pessoa: Pessoa = {

    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
    
  }


  constructor(
    
      private service: PessoaService,
      private router: Router,

      private route: ActivatedRoute
    
    ) { }

  ngOnInit(): void {

    const id =  this.route.snapshot.paramMap.get('id')

    this.service.buscarPorId(parseInt(id!)).subscribe((pessoa) => {

      this.pessoa = pessoa

    })

  }

editar(){


this.service.editar(this.pessoa).subscribe(() => {

  this.router.navigate(['/listarPessoa'])

})


}

cancelar(){

  this.router.navigate(['/listarPessoa'])

}


}
