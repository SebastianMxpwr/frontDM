import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../Services/producto.service'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public productoS: ProductoService) {}

  ngOnInit() {
    this.productoS.obtenerProductos()
  }

  deleteProductos(_id: string){
    this.productoS.deleteProductos(_id).subscribe(res=>{
      this.getProductos()
    })
  }

  getProductos(){
    this.productoS.obtenerProductos()
  }
}
