import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Producto } from '../models/producto_model'



@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  url = "https://back-dm.herokuapp.com"
  producto: any
  Producto: Producto

constructor(public http: HttpClient) {
  this.producto = []
}

register(product:Producto ){
  return  this.http.post(`${this.url}/register/productos`, product)
}

obtenerProductos(){
  this.http.get(`${this.url}` + '/api/producto').subscribe( res=>{
    this.producto=res
  }, err=>{
    console.log(err) 
  })
}

deleteProductos(_id: string){
  return this.http.delete(`${this.url}/api/del/productos/` + `${_id}`)

}


}
