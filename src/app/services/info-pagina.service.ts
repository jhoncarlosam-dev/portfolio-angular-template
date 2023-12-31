import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../intefaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = true;

  constructor( private http: HttpClient ) {
    console.log('Servicio de infoPagina listo');
    
    //leer el archivo JSON
    this.http.get('assets/data/data-paginas.json')
    .subscribe( (resp: InfoPagina) => {

      this.cargada = true;
      this.info = resp;
      console.log( resp.twitter );
    });
    // .subscribe( resp => {
    //   console.log( resp['twitter'] );
    // }); 
  }
}
