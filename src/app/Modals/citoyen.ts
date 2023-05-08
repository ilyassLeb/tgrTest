export interface Citoyen{
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
