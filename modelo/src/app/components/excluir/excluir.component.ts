import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService } from '@services/base/base.service';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
  styleUrls: ['./excluir.component.scss']
})
export class ExcluirComponent implements OnInit {

  @Input() dado: any

  @Input() param: any

  constructor(

    private service: BaseService,

    private router: Router

  ) {}

  ngOnInit(): void {}

  excluir() {

    if(this.dado.id) {

      this.service.excluir(this.dado.id).subscribe(() => {

        let modal = document.querySelector('#modal-sm-'+ this.dado.id) as HTMLLIElement

        modal.remove()

        let backdrop = document.querySelector('.modal-backdrop') as HTMLLIElement

        backdrop.remove()

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
