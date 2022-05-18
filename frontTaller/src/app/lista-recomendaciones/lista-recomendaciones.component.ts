import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-lista-recomendaciones',
  templateUrl: './lista-recomendaciones.component.html',
  styleUrls: ['./lista-recomendaciones.component.css']
})
export class ListaRecomendacionesComponent implements OnInit {

  recomendaciones : any[] = [];

  features : any[] = [];

  usersImportantes : any[] = [];


  location = {lat:0, lng:0};
  
  label = {
    color:"black",
    text:"Marcador"
  };

  constructor(private usuarioService: UsuarioService, private sanitizer: DomSanitizer) { 
    this.usuarioService.get_recomendaciones_by_id(usuarioService.idLogged).subscribe((data:any)=>{
      console.log(data);
      console.log(JSON.parse(data["recommendaciones"]));
      console.log(JSON.parse(data["usuarios"]));
      console.log(data["features"]);
      console.log(JSON.parse(data["users_items"]));

      this.recomendaciones = JSON.parse(data["recommendaciones"]);
      this.usersImportantes = JSON.parse(data["usuarios"]);
      this.features = data["features"];

      
      //Para generar el mapa

      let lat_min = Number.MAX_SAFE_INTEGER;
      let lat_max = Number.MIN_SAFE_INTEGER;
      let lng_min = Number.MAX_SAFE_INTEGER;
      let lng_max = Number.MIN_SAFE_INTEGER; 

      this.recomendaciones.forEach(element => {
          if(element["latitude"] > lat_max ){
            lat_max = element["latitude"];
          }

          if(element["latitude"] < lat_min ){
            lat_min = element["latitude"];
          }

          if(element["longitude"] > lng_max ){
            lng_max = element["longitude"];
          }

          if(element["longitude"] < lng_min ){
            lng_min = element["longitude"];
          }
        });

      let latCenter = (lat_max + lat_min) / 2.0;
      let lngCenter = (lng_max + lng_min) / 2.0;

      console.log(lat_max);
      console.log(lat_min);
      console.log(latCenter);

      console.log(lng_max);
      console.log(lng_min);
      console.log(lngCenter);



      this.location = { lat: latCenter, lng: lngCenter};

    });
  }

  ngOnInit(): void {
  }

}
