import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  private readonly api = "http://localhost:3000/usuario"

  constructor(private http: HttpClient) { }

  /**
   *
   * @returns
   */
  listar(): Observable<any[]> {

    return this.http.get<any>(this.api)

  }

  criar(dados: any): Observable<any> {

    return this.http.post<any>(this.api, dados)

  }

}
