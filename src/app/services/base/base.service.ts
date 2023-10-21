import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService implements OnInit {

  private api: string = environment.api

  constructor( private http: HttpClient ) {}

  ngOnInit(): void {}

  get(endPoint: string): Observable<any[]> {
    
    return this.http.get<any>(`${this.api}/${endPoint}`)

  }





  listar(gateway: string): Observable<any[]> {
    console.log("API : ", this.api)
    const url = `${this.api}${gateway}`

    return this.http.get<any>(url)

  }

  criar(gateway: string, dados: any): Observable<any> {
    
    const url = `${this.api}${gateway}`
    
    return this.http.post<any>(url, dados)

  }

  editar(gateway: string, dados: any): Observable<any> {

    const url = `${this.api}${gateway}/${dados.id}`

    return this.http.put<any>(url, dados)

  }

  excluir(id: number): Observable<any> {

    const url = `${this.api}/${id}`

    return this.http.delete<any>(url)

  }


  buscarPorId(gateway: string, id: number): Observable<any> {

    const url = `${this.api}${gateway}/${id}`

    return this.http.get<any>(url)

  }

}
