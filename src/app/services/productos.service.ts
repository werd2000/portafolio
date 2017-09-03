import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class ProductosService {

  productos:any[] = [];
  cargando:boolean = true;

  constructor( private http:Http ) {
    this.cargar_productos();
  }

  public cargar_productos(){
    this.cargando = true;
    this.http.get('https://templateangular.firebaseio.com/productos_idx.json')
          .subscribe(rpta =>{
            console.log(rpta.json());
            this.productos = rpta.json();
            this.cargando = false;
          })

  }

}
