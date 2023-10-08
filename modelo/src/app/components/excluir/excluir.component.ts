import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService } from '@services/base/base.service';

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

  ngOnInit(): void {}

  excluir() {

    if(this.id) {

      this.service.excluir(this.id).subscribe(() => {

        let modal = document.querySelector('#modal-sm-'+ this.id) as HTMLLIElement

        modal.hidden = true

        let backdrop = document.querySelector('.modal-backdrop') as HTMLLIElement

        backdrop.hidden = true



        this.recarregarComponente()

      })

    }

  }

  recarregarComponente() {

    this.router.routeReuseStrategy.shouldReuseRoute = () => false

    this.router.onSameUrlNavigation = "reload"

    this.router.navigate([this.router.url])

  }

}
