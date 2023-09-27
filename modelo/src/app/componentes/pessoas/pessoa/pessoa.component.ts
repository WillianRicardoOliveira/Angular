import { Component, Input, OnInit } from '@angular/core';
import { Pessoa } from '../pessoa';
import { PessoaService } from '../pessoa.service';

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
    modelo: '',
    favorito: false
  }





  @Input() listaFavoritos: Pessoa[] = []




  constructor(private service: PessoaService) { }

  ngOnInit(): void {
  }

  larguraPessoa(): string {
    if(this.pessoa.conteudo.length >= 256) {

      return 'pensamento-g';

    } else {
      return 'pensamento-p';
    }

  }


  mudariconeFavorito(): string {

    if(this.pessoa.favorito == false){

      return "inativo"

    } else {

      return "ativo"
    }


  }

  atualizarFavoritor(){

    this.service.mudarFavorito(this.pessoa).subscribe(() => {

      this.listaFavoritos.splice(this.listaFavoritos.indexOf(this.pessoa), 1)

    })


   


  }



}
