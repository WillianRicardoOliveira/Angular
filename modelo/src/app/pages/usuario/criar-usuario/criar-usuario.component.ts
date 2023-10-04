import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-criar-usuario',
  templateUrl: './criar-usuario.component.html',
  styleUrls: ['./criar-usuario.component.scss']
})
export class CriarUsuarioComponent implements OnInit {

lista: Usuario = {
  id: 1,
  nome: "Willian"
}

params={routerLink:""}

constructor() {}

ngOnInit(): void {}

}
