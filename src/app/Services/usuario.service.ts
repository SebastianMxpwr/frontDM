import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { User } from '../models/user_model'
import { tap } from 'rxjs/operators'
import { JwtResponseU } from '../models/JwtResponseU'
import { Observable, BehaviorSubject } from 'rxjs'
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';





@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  url = "https://back-dm.herokuapp.com"
  usuario: any
  usuarioTipo: string
  usuarioNombre: string
  constructor(private http: HttpClient, public alertController: AlertController, public router: Router) {
    this.usuario=[]
  }

  validarLogin(user: User):Observable<JwtResponseU>{
    return this.http.post<JwtResponseU>
    (`${this.url}` + '/api/login/usuario', user).pipe(tap((res:JwtResponseU)=>{
      if (res){
        this.usuarioTipo = res.datosUsuario.strTipoUsuario
        this.usuarioNombre = res.datosUsuario.strNombreUsuario

        let infoSUer={
          userName: this.usuarioNombre,
          userType: this.usuarioTipo
        }

        localStorage.setItem('infoUser', JSON.stringify(infoSUer))
        
      }
    }, async err=>{
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'las credenciales no coinciden',
        buttons: ['Ta weno']
      });
      await alert.present();
    }))
  }

  register(user: User): Observable<JwtResponseU>{
    return  this.http.post<JwtResponseU>
    (`${this.url}/api/register/usuario`, user).pipe(tap((res:JwtResponseU)=>{

    }))
  }

  obtenerUsuarios(){
    this.http.get(`${this.url}/api/usuario`).subscribe( res=>{
      this.usuario=res
    }, err=>{
      console.log(err) 
    })
  }

  deleteUsuarios(_id: string){
    return this.http.delete(`${this.url}/api/del/usuarios/` + `${_id}`)
  
  }

  logout(){
    localStorage.removeItem('infoUser')
    this.router.navigate(['/'])
  }
}
