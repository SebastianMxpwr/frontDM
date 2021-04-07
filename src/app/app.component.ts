import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { UsuarioService } from './services/usuario.service';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
  //   if(window.localStorage !== undefined){
  //     if(window.localStorage.getItem('infoEmpleado')){
  //       let infoUser= localStorage.getItem('infoEmpleado')
  //       let infoUserJson = JSON.parse(infoUser)
  //       let navExtras: NavigationExtras={
  //         queryParams:{
  //           userName:infoUserJson.userName
  //         }
  //       }
  //       this.usuarioService.user = infoUserJson.userName
  //       router.navigate(['/tabs/tab1'], navExtras)

  //     } else if (window.localStorage.getItem('infoAdmin')){
  //       let infoAdmin= localStorage.getItem('infoAdmin')
  //       let infoUserJson = JSON.parse(infoAdmin)
  //       let navExtras: NavigationExtras={
  //         queryParams:{
  //           userName:infoUserJson.userName
  //         }
  //       }
  //       this.adminService.user = infoUserJson.userName
  //       router.navigate(['/tabs2/tab4'], navExtras)
  //     }
  //   }else{
  //     router.navigate(['/'])
  //   }
  }
}
