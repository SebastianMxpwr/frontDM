import { Component } from '@angular/core';
import { ProductoService } from '../Services/producto.service'
import { UsuarioService } from '../Services/usuario.service'
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular'



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    public activeR: ActivatedRoute, 
    public router: Router, 
    public productoS: ProductoService, 
    public alertController: AlertController,
    public usuarioS: UsuarioService) {}

  onRegister(form){
    this.productoS.register(form.value).subscribe(async res=>{
      const alert = await this.alertController.create({
        header: 'Exito',
        message: 'Se añadio el producto',
        buttons: ['OK']
      });
      await alert.present();
    }), err=>{
      console.log(err)
    }

  }
  logout(){
    this.usuarioS.logout()
  }
}
