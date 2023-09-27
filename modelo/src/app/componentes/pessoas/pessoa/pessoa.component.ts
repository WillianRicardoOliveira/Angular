import { Component, Input, OnInit } from '@angular/core';
import { Pessoa } from '../pessoa';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

  @Input() pessoa: Pessoa = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  larguraPessoa(): string {
    if(this.pessoa.conteudo.length >= 256) {

      return 'pensamento-g';

    } else {
      return 'pensamento-p';
    }

  }



}
