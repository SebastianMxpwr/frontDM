import { Component } from '@angular/core';
import { ProductoService} from '../Services/producto.service'

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(public productoS: ProductoService) {}


  getProductos(){
    this.productoS.obtenerProductos()
  }
}
