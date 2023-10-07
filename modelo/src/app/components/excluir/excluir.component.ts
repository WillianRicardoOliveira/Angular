import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseService } from '@services/base/base.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
  styleUrls: ['./excluir.component.scss']
})
export class ExcluirComponent implements OnInit {

  @Input() ids: number

  dados: any = {}


  //@Input() params: any;

  constructor(

    private service: BaseService,

    private router: Router,

    private route: ActivatedRoute

    ) {}

  ngOnInit(): void {

     const id = this.route.snapshot.paramMap.get("id")
     console.log("Remover :: Init ", id)

     this.service.buscarPorId(this.ids).subscribe((dados)=>{

      this.dados = dados

     })

   }

   excluir(teste: number) {

    console.log("Remover :: ", teste)
    //console.log("Remover :: " ,id)
/*
    if(this.registro.id) {
      this.service.excluir(this.registro.id).subscribe(() =>{
        this.router.navigate(["/listar-usuario"])
      })
    }
*/
   }

}
