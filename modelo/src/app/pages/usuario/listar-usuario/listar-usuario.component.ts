import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { BaseService } from '@services/base/base.service';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.scss']
})
export class ListarUsuarioComponent implements OnInit {

  lista: Usuario[] = []


  parametros = {

    routerLink: "/criar-usuario",

    rotaEditar: "/editar-usuario",

    titulo: "Lista de usuários",

    pagina: "Usuários",

    gateway: "usuario"

  }

  constructor(private service: BaseService) {}

  ngOnInit(): void {
    this.service.listar(this.parametros.gateway).subscribe((lista) => {
      this.lista = lista
    })
  }

}
