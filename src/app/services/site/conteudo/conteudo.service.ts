import { Injectable, OnInit } from '@angular/core';
import { BaseService } from '@services/base/base.service';

@Injectable({
  providedIn: 'root'
})
export class ConteudoService implements OnInit {

  constructor( private service: BaseService ) {}

  ngOnInit(): void {}

  listar () {
  
    return this.service.get("conteudo")
  
  }
}
