import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx'


@Component({
  selector: 'app-tab7',
  templateUrl: './tab7.page.html',
  styleUrls: ['./tab7.page.scss'],
})
export class Tab7Page {

  datosEscaneados: {}
  datocodificado : any
  constructor(public activeR: ActivatedRoute, public router: Router, public barcodeScanner: BarcodeScanner) {}

  leerCode(){
    this.barcodeScanner.scan().then(barcodeData=>{
      this.datosEscaneados = barcodeData
    })
    .catch(err=>{
      console.log(err)
    })
  }
  
  codificarTexto(){
    this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE, this.datocodificado).then(encodedData=>{
      this.datocodificado = encodedData
    }, err=>{
      console.log(err)
    })
  }

  

}
