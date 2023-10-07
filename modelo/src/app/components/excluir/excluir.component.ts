import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService } from '@services/base/base.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
  styleUrls: ['./excluir.component.scss']
})
export class ExcluirComponent implements OnInit {

  @Input() id: number



  //@Input() params: any;

  constructor(

    private service: BaseService,

    private router: Router

    ) {}

  ngOnInit(): void {  }

   excluir() {

    console.log("Remover :: ", this.id)
    //console.log("Remover :: " ,id)

    if(this.id) {
      this.service.excluir(this.id).subscribe(() =>{
        this.router.navigate(["/lista-usuario"])
      })
    }

   }

}
