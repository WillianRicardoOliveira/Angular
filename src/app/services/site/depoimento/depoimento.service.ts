import { Injectable, OnInit } from '@angular/core';
import { BaseService } from '@services/base/base.service';

import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DepoimentoService implements OnInit {

  constructor(private service: BaseService) {}

  ngOnInit(): void {}

  listar(){
    return this.service.get("depoimentos")
 
  }

}
