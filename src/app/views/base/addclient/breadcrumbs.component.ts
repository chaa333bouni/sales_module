import { Component, OnInit } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  BreadcrumbComponent,
  BreadcrumbItemComponent,
  BreadcrumbRouterComponent,
  CardBodyComponent,
  CardComponent,
  
  CardHeaderComponent,
  ColComponent,
  RowComponent,
  TextColorDirective
} from '@coreui/angular';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
  standalone: true,
  imports: [RowComponent, ColComponent,RouterLink,
     TextColorDirective, CommonModule, CardComponent, CardHeaderComponent, CardBodyComponent, BreadcrumbComponent, BreadcrumbItemComponent, NgClass, BreadcrumbRouterComponent, FormsModule]
})
export class BreadcrumbsComponent implements OnInit {
  selectedType: string = 'société'

  Clientobj : client = new client ();
  clientList : client [] =[] ;
  constructor(private RouterLink: Router) {}
  
  ngOnInit(): void {
    const localdata =localStorage.getItem("angular17crud");
    if(localdata!=null){
      this.clientList=JSON.parse(localdata)
    }
  }
  previewUrl: string | ArrayBuffer | null = null;

onFileSelected(event: Event): void {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files.length > 0) {
    const file = input.files[0];

    // Utilisation de FileReader pour lire l'image
    const reader = new FileReader();
    reader.onload = () => {
      this.previewUrl = reader.result; // Stocker l'URL pour prévisualisation
      this.Clientobj.photo = this.previewUrl as string; // Sauvegarder l'URL de l'image
    };
    reader.readAsDataURL(file); // Lire le fichier image
  }
}

  trackByIndex(index: number): number {
    return index;
  }
 

 
  editClient(item : client){
    this.Clientobj=item
    
  }
  saveclient() {
    debugger;
    const isLocalPresent = localStorage.getItem("angular17crud");
    if(isLocalPresent != null) {
        const oldArray = JSON.parse(isLocalPresent);
        oldArray.push(this.Clientobj);
        localStorage.setItem('angular17crud', JSON.stringify(oldArray));
    } else {
        const newArr = [];
        newArr.push(this.Clientobj);
        localStorage.setItem('angular17crud', JSON.stringify(newArr));
    }
    
}
deleteClient(index: number) {
  this.clientList.splice(index, 1);
  localStorage.setItem('angular17crud', JSON.stringify(this.clientList));
}  
}
export class client {
  nom:string 
  prenom:string
  email:string
  numero_telephone:string
  societe:string
  photo: string | undefined;
  constructor(){
    this.nom='',
    this.prenom=''
    this.email=''
    this.numero_telephone=''
    this.societe=''
    this.nom=''
  }
}
