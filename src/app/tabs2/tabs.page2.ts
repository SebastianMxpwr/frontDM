import { Component } from '@angular/core';
import { ProductoService} from '../Services/producto.service'
import { UsuarioService} from '../Services/usuario.service'

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage2 {

  constructor(
    public productoS: ProductoService, 
    public usuarioS: UsuarioService) {}

    getAll(){
      this.productoS.obtenerProductos()
      this.usuarioS.obtenerUsuarios()
    }

}
