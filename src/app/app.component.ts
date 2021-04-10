import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { UsuarioService } from './services/usuario.service';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public router: Router, public usuarioS: UsuarioService) {
      let infoget = localStorage.getItem('infoUser')
      let infoUserJson = JSON.parse(infoget)
    if(infoget != undefined || infoget != null){
      let navExtras: NavigationExtras={
        queryParams:{
          usuarioNombreJ: infoUserJson.usuarioNombre
        }
        
      }
      this.usuarioS.usuarioNombre = infoUserJson.usuarioNombre
      if(infoUserJson.userType == "Admin" || infoUserJson.userType == "admin"){
        router.navigate(['/tabs2/tab4', navExtras])
      }else{
        this.usuarioS.usuarioNombre = infoUserJson.usuarioNombre
        router.navigate(['/tabs/tab1', navExtras])
      }
      
    }
  }
}
