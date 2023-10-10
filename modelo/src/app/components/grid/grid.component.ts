import { triggerDestaque } from '@/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],

  animations: [triggerDestaque]

})
export class GridComponent implements OnInit {

  @Input() lista: any

  @Input() param: any

  indexTarefa = -1

  constructor() {}

  ngOnInit(): void {}

}
