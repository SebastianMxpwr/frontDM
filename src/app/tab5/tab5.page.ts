import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../Services/usuario.service'
import { AlertController } from '@ionic/angular'


@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  constructor(public usuarioS:UsuarioService, public alertController: AlertController) { }

  ngOnInit() {
  }

  onRegister(form){
    this.usuarioS.register(form.value).subscribe(async res=>{
      const alert = await this.alertController.create({
        header: 'Exito',
        message: 'Se añadio al usuario',
        buttons: ['OK']
      });
      await alert.present();
      
    }, err=>{
      console.log(err)
    })
  }

  getUsuarios(){
    this.usuarioS.obtenerUsuarios()
  }
}
