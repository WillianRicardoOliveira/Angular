import { Promocao } from '@/interface/interface';
import { Component, OnInit } from '@angular/core';
import { PromocaoService } from '@services/site/promocao.service';


@Component({
  selector: 'app-promocoes',
  templateUrl: './promocoes.component.html',
  styleUrls: ['./promocoes.component.scss']
})
export class PromocoesComponent implements OnInit {
  promocoes!: Promocao[];
  constructor(private service: PromocaoService) {
  }
  ngOnInit(): void {
    

    this.service.listar().subscribe(
      res => {
        this.promocoes = res;
      }
    )
  }
}
