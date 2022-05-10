import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_URL = "http://localhost:5000/"

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  loggedIn : boolean = false;

  idLogged: string = "";

  constructor( private http: HttpClient) { 
    console.log("Usuario API lista")
  }

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };


  get_usuario(id:string){
    return this.http.get(API_URL + 'get_usuario/' + id);
  }

  get_recomendaciones_by_id(id:string){
    return this.http.get(API_URL + 'get_recomendaciones/' + id);
  }

  getLogStatus (){
    return this.loggedIn;
  }

  setLogStatus (status: boolean){
    
    this.loggedIn = status;
  }
}
