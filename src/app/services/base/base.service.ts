import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  private readonly api = "http://localhost:3000/"

  constructor(private http: HttpClient) { }

  listar(gateway: string): Observable<any[]> {

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
