import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseService } from '@services/base/base.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.scss']
})
export class EditarUsuarioComponent implements OnInit {

  formulario!: FormGroup

  param={routerLink:"", api:"",titulo: "Editar usuário",
  pagina: "Editar usuário",
  gateway: "usuario"
}


  constructor(

    private service: BaseService,

    private router: Router,

    private route: ActivatedRoute,

    private formBuilder: FormBuilder,

    private toastr: ToastrService

  ) {}

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id')

    console.log("ID :: ",  id)

    this.service.buscarPorId(this.param.gateway, parseInt(id!)).subscribe((dados) => {


      this.formulario = this.formBuilder.group({

        id: [dados.id],

        nome: [dados.nome, Validators.compose([

          Validators.required,

          Validators.pattern(/(.|\s)*\S(.|\s)*/),

          Validators.minLength(3)

        ])]
      })

    })

  }

  editar() {

    console.log(this.formulario.status)

    console.log(this.formulario.get("nome")?.errors)

    if(this.formulario.valid) {

      this.service.editar(this.param.gateway, this.formulario.value).subscribe(() => {


        this.router.navigate(["/lista-usuario"])

        this.toastr.success('Salvo com successo');

      })

    }

  }

  cancelar() {

    this.router.navigate(["/lista-usuario"])

  }

}
