import { Promocao } from '@/interface/interface';
import { Component, OnInit } from '@angular/core';
import { PromocaoService } from '@services/site/promocao.service';

@Component({
  selector: 'app-home-site',
  templateUrl: './home-site.component.html',
  styleUrls: ['./home-site.component.scss']
})
export class HomeSiteComponent implements OnInit {
  
  constructor( private service: PromocaoService ) {}

  ngOnInit(): void {

  
  }

}
