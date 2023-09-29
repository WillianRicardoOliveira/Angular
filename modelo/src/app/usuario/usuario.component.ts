import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ConsultaCepService } from '../servicos/consulta-cep/consulta-cep.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
})
export class UsuarioComponent implements OnInit {
  constructor(
    private router: Router,

    private ConsultaCepService: ConsultaCepService
  ) {}

  ngOnInit(): void {}

  salvar(form: NgForm) {
    // console.log(form)

    // console.log(form.controls)

    if (form.valid) {
      this.router.navigate(['./sucesso']);
    } else {
      console.log('INVÁLIDO');
    }
  }

  consultaCep(ev: any, form: NgForm) {


    const cep = ev.target.value;

    //if (cep !== "") {
      return this.ConsultaCepService.consultaCep(cep).subscribe((resultado) => {
        console.log(resultado);

        this.populandoEndereco(resultado, form)

      });
    //}
  }

  populandoEndereco(dados: any, form: NgForm) {

    form.form.patchValue({

      endereco: dados.logradouro,
      complemento: dados.complemento,
      bairro: dados.bairro,
      cidade: dados.localidade,
      estado: dados.uf

    })

  }

}
