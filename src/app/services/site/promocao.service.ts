import { Promocao } from '@/interface/interface';
import { Injectable, OnInit } from '@angular/core';
import { BaseService } from '@services/base/base.service';

@Injectable({
  providedIn: 'root'
})
export class PromocaoService implements OnInit {

  constructor( private service: BaseService ) {}

  ngOnInit(): void {}

  listar () {
    return this.service.get("promocao")
    /*
    return this.service.get("promocao")
    .subscribe(
      resposta => {
        return resposta
      }
    )
      */
  }

}
