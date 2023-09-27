import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../pessoa';
import { PessoaService } from '../pessoa.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-pessoa',
  templateUrl: './editar-pessoa.component.html',
  styleUrls: ['./editar-pessoa.component.css']
})
export class EditarPessoaComponent implements OnInit {

  /*
  pessoa: Pessoa = {

    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
    
  }
  */

  formulario!: FormGroup;

  constructor(
    
      private service: PessoaService,
      private router: Router,

      private route: ActivatedRoute,

      private formBuilder: FormBuilder
    
    ) { }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(parseInt(id!)).subscribe((pessoa) => {

      this.formulario = this.formBuilder.group({
        id: [pessoa.id],
        conteudo: [pessoa.conteudo, Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/)
        ])],
        autoria: [pessoa.autoria, Validators.compose([
          Validators.required,
          Validators.minLength(3)
        ])],
        modelo: [pessoa.modelo],
        favorito: [pessoa.favorito]
      })

      
    })

  }

editar(){


this.service.editar(this.formulario.value).subscribe(() => {

  this.router.navigate(['/listarPessoa'])

})


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
