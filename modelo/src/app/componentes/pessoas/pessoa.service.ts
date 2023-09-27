import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Pessoa } from './pessoa';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private readonly API = 'http://localhost:3000/pessoas'

  constructor(private http: HttpClient) { }


  listar(): Observable<Pessoa[]> {

    return this.http.get<Pessoa[]>(this.API)

  }

  criar(pessoa: Pessoa): Observable<Pessoa> {
    return this.http.post<Pessoa>(this.API, pessoa)
  }

  editar(pessoa: Pessoa): Observable<Pessoa> {

    const url = `${this.API}/${pessoa.id}`
    
    return this.http.put<Pessoa>(url, pessoa);

  }

  excluir(id: number): Observable<Pessoa> {

    const url = `${this.API}/${id}`

    return this.http.delete<Pessoa>(url)

  }


  buscarPorId(id: number): Observable<Pessoa> {

    const url = `${this.API}/${id}`

    return this.http.get<Pessoa>(url);

  }


}
