import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { BaseService } from '@services/base/base.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-usuario',
  templateUrl: './criar-usuario.component.html',
  styleUrls: ['./criar-usuario.component.scss']
})
export class CriarUsuarioComponent implements OnInit {

usuario: Usuario = {

  nome: "Novo usuario"
}

params={routerLink:"", api:""}

constructor(private service: BaseService,

  private router: Router

  ) {}

ngOnInit(): void {}


criar() {

  this.service.criar(this.usuario).subscribe(() => {

    this.router.navigate(["/listar-usuario"])

  })

}

cancelar() {

  this.router.navigate(["/listar-usuario"])

}


}
