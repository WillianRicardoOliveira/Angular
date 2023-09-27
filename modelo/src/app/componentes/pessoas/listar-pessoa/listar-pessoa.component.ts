import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../pessoa';
import { PessoaService } from '../pessoa.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-pessoa',
  templateUrl: './listar-pessoa.component.html',
  styleUrls: ['./listar-pessoa.component.css']
})
export class ListarPessoaComponent implements OnInit {

  listaPessoas: Pessoa[] = [];

  paginaAtual: number = 1

  haMaisPessoas: boolean = true

  filtro: string = ''

favorito: boolean = false



listaFavoritos: Pessoa[] = []


titulo: string = 'Meu mural'



  constructor(private service: PessoaService,

    private router: Router
    
    
    
    ) { }

  ngOnInit(): void {

    this.service.listar(this.paginaAtual, this.filtro, this.favorito).subscribe((listaPessoas) => {

      this.listaPessoas = listaPessoas;

    })

  }

  carregraMaisPessoas() {

    this.service.listar(++this.paginaAtual, this.filtro, this.favorito).subscribe((listaPessoas) => {

      this.listaPessoas.push(...listaPessoas)

      if(!listaPessoas.length){

        this.haMaisPessoas = false;
      }

    })

  }

  pesquisarPessoas(){

    this.haMaisPessoas = true

    this.paginaAtual = 1

    

    this.service.listar(this.paginaAtual, this.filtro, this.favorito)
    .subscribe((listaPessoas) => {

      this.listaPessoas = listaPessoas


    })




  }


  recarregarComponente(){



    this.favorito = false;

    this.paginaAtual = 1

    this.router.routeReuseStrategy.shouldReuseRoute = () => false;

    this.router.onSameUrlNavigation = 'reload'

    this.router.navigate([this.router.url])




  }

  listarFavoritos(){

    this.titulo = 'Meus favoritos'

    this.favorito = true

    this.haMaisPessoas = true

    this.paginaAtual = 1

    this.service.listar(this.paginaAtual, this.filtro, this.favorito).subscribe(listarPessoasFavoritos => {

      this.listaPessoas = listarPessoasFavoritos



      this.listaFavoritos = listarPessoasFavoritos

    })


  }


}
