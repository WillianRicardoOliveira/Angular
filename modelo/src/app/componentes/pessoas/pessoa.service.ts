import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Pessoa } from './pessoa';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private readonly API = 'http://localhost:3000/pessoas'

  constructor(private http: HttpClient) { }


  listar(pagina: number, filtro: string, favorito: boolean): Observable<Pessoa[]> {


    const itensPorPagina = 6;

    let params = new HttpParams()
    .set("_page", pagina)
    .set("_limit", itensPorPagina)


    if(filtro.trim().length > 2){

      params = params.set("q", filtro)

    }

    if(favorito){

      params = params.set("favorito", true)

    }

    return this.http.get<Pessoa[]>(this.API, {params})

  }



  criar(pessoa: Pessoa): Observable<Pessoa> {
    return this.http.post<Pessoa>(this.API, pessoa)
  }

  editar(pessoa: Pessoa): Observable<Pessoa> {

    const url = `${this.API}/${pessoa.id}`
    
    return this.http.put<Pessoa>(url, pessoa);

  }

  mudarFavorito(pessoa: Pessoa): Observable<Pessoa> {
    pessoa.favorito = !pessoa.favorito

   
    return this.editar(pessoa)

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
