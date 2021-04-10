import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService} from '../Services/producto.service'
import { UsuarioService } from '../Services/usuario.service'
import { AlertController } from '@ionic/angular'


@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor(
    public activeR: ActivatedRoute, 
    public router: Router, 
    public productoS: ProductoService,
    public alertController: AlertController,
    public usuarioS: UsuarioService) { }

  ngOnInit() {
  }

  onRegister(form){
    this.productoS.register(form.value).subscribe(async res=>{
      const alert = await this.alertController.create({
        header: 'Exito',
        message: 'Se añadio el producto',
        buttons: ['OK']
      });
      await alert.present();
    }), async err=>{
      const alert = await this.alertController.create({
        header: 'Exito',
        message: 'hubo un error',
        buttons: ['OK']
      });
      await alert.present();
    }
  }

  logout(){
    this.usuarioS.logout()
  }
  
}
