import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular'
import { UsuarioService } from '../Services/usuario.service'
import { User } from '../models/user_model'



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

public user: User
  constructor(public alertController: AlertController, public router: Router, public usuarioService: UsuarioService) { 
    this.user = new User()
  }

  ngOnInit() {
  }

  logints(form){
    this.usuarioService.validarLogin(form.value).subscribe(async res=>{
      if(res){
        if(this.usuarioService.usuarioTipo == 'Admin' || this.usuarioService.usuarioTipo == 'admin'){
          const alert = await this.alertController.create({
            header: 'Exito',
            message: 'Se logeo con exito',
            buttons: ['OK']
          });
          await alert.present();
          this.router.navigate(['/tabs2/tab4'])
        }else if(this.usuarioService.usuarioTipo == 'Trabajador' || this.usuarioService.usuarioTipo == 'Normal'){
          const alert = await this.alertController.create({
            header: 'Exito',
            message: 'Se logeo con exito',
            buttons: ['OK']
          });
          await alert.present();
          this.router.navigate(['/tabs/tab1'])
        }
      }
    })
  }

  }


