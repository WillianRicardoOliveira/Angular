import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  @Input() lista: any;

  @Input() params: any;

  constructor() {}

  ngOnInit(): void {}

  botao(): string {
    return "btn btn-block bg-gradient-primary";
  }

}
