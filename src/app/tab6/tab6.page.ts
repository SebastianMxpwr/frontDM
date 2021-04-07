import { Component, OnInit } from '@angular/core';
import { ProductoService} from '../Services/producto.service'
import { UsuarioService } from '../Services/usuario.service'

@Component({
  selector: 'app-tab6',
  templateUrl: './tab6.page.html',
  styleUrls: ['./tab6.page.scss'],
})
export class Tab6Page implements OnInit {

  constructor(public productoS: ProductoService, public usuarioS: UsuarioService) { }

  ngOnInit() {
    this.productoS.obtenerProductos()
    this.usuarioS.obtenerUsuarios()
  }

  deleteUsuario(_id:string){
    this.usuarioS.deleteUsuarios(_id).subscribe(res=>{
      this.getUsuarios()
    })
  }
  deleteProductos(_id:string){
    this.productoS.deleteProductos(_id).subscribe(res=>{
      this.getProductos()
    })
  }

  getUsuarios(){
    this.usuarioS.obtenerUsuarios()
  }
  getProductos(){
    this.productoS.obtenerProductos()
  }


}
