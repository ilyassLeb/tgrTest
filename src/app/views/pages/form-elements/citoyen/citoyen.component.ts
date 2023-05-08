import { Component, OnInit } from '@angular/core';
import { Citoyen } from 'src/app/Modals/citoyen';
import { CitoyenService } from 'src/app/services/citoyen/citoyen.service';

@Component({
  selector: 'app-citoyen',
  templateUrl: './citoyen.component.html',
  styleUrls: ['./citoyen.component.scss']
})
export class CitoyenComponent implements OnInit {

  constructor(private sc:CitoyenService) { }


  citoyenSaisi :Citoyen = {
    nom:"",
    nomArab:"",
    prenom:"",
    prenomArab:"",
    ville:"",
    villeArab:"",
    cin:"",
    nomDuPere:"",
    nomDuPereArab:"",
    nomDuMereArab:"",
    nomDuMere:"",
    adress:"",
    sexe:"",
    etatCivil:"",
    adressArab:"",


    /*
       id?      :number;
   nom?     :string;
   nomArab?   :string;
   prenom?  :string;
   prenomArab?:string;
   dateNaissance? :Date;
   ville?  :string;
   villeArab?:string,
   valableJusqua?:Date;
   cin?    :string;
   nomDuPere?:string;
   nomDuPereArab?:string;
   nomDuMere?:string;
   nomDuMereArab?:string;
   adress?:string;
   sexe?:string;
   etatCivil?:string;
   adressArab?:string;
}
*/
  }
  citoyens:any=[];

  ngOnInit(): void {
  }



  finishFunction() {
    alert('Successfully Completed');
  }

  persist(){
  this.sc.persist(this.citoyenSaisi)
  .subscribe((cito)=>{
    this.citoyens=[cito,...this.citoyens]
  })

  }

  /*  persist() {
  this.appliancService.persist(this.Myappliance)
  .subscribe((appliance)=>{
    console.log(this.Myappliance)
    this.appliances=[appliance,...this.appliances]
  })
} */

}
