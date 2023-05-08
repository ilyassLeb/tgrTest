import { Injectable } from '@angular/core';
import { Citoyen } from 'src/app/Modals/citoyen';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CitoyenService {

  constructor(private http:HttpClient ) { }

  persist(citoyen :Citoyen ) {
    console.log(citoyen);
    return this.http.post<Citoyen>("http://localhost:8085/citoyen",citoyen);

   }

}


