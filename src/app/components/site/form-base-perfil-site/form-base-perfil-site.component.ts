import { UnidadeFederativa } from '@/interface/interface';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CadastroSiteService } from '@services/site/cadastro-site/cadastro-site.service';


@Component({
  selector: 'app-form-base-perfil-site',
  templateUrl: './form-base-perfil-site.component.html',
  styleUrls: ['./form-base-perfil-site.component.scss']
})
export class FormBasePerfilSiteComponent implements OnInit {
  
  cadastroForm!: FormGroup;
  
  estadoControl = new FormControl<UnidadeFederativa | null>(null, Validators.required);

  @Input() perfilComponent!: boolean

  @Output() acaoClique: EventEmitter<any> = new EventEmitter<any>()

  constructor(
    private formBuilder: FormBuilder,
    private service: CadastroSiteService
  ) { }

  ngOnInit() {
    this.cadastroForm = this.formBuilder.group({
      nome: [null, Validators.required],
      nascimento: [null, [Validators.required]],
      cpf: [null, [Validators.required]],
      cidade: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required, Validators.minLength(3)]],
      genero: ['outro'],
      telefone: [null, Validators.required],
      estado: this.estadoControl,
      confirmarEmail: [null, [Validators.required, Validators.email]],
      confirmarSenha: [null, [Validators.required, Validators.minLength(3)]],
      aceitarTermos: [null, [Validators.requiredTrue]]
    });

    this.service.setCadastro(this.cadastroForm)
  }

  executarAcao() {
    this.acaoClique.emit()
  }

}
