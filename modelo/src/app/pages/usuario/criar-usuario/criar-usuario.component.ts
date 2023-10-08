import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { BaseService } from '@services/base/base.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-criar-usuario',
  templateUrl: './criar-usuario.component.html',
  styleUrls: ['./criar-usuario.component.scss']
})
export class CriarUsuarioComponent implements OnInit {

formulario!: FormGroup

params={routerLink:"", api:""}

constructor(

  private service: BaseService,

  private router: Router,

  private formBuilder: FormBuilder,

  private toastr: ToastrService

) {}

ngOnInit(): void {

  this.formulario = this.formBuilder.group({

    nome: ['', Validators.compose([

      Validators.required,

      Validators.pattern(/(.|\s)*\S(.|\s)*/),

      Validators.minLength(3)

    ])]

  })

}


criar() {

  console.log(this.formulario.status)

  console.log(this.formulario.get("nome")?.errors)

  if(this.formulario.valid) {

    this.service.criar(this.formulario.value).subscribe(() => {

      this.router.navigate(["/lista-usuario"])

      this.toastr.success('Salvo com successo');

    })

  }

}

cancelar() {

  this.router.navigate(["/listar-usuario"])

}


}
