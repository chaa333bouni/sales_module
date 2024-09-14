import { Component } from '@angular/core';
import {  ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NgTemplateOutlet } from '@angular/common';
import { DocsExampleComponent } from '@docs-components/public-api';
import {
  BorderDirective,
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardFooterComponent,
  CardGroupComponent,
  CardHeaderComponent,
  CardImgDirective,
  CardLinkDirective,
  CardSubtitleDirective,
  CardTextDirective,
  CardTitleDirective,
  ColComponent,
  GutterDirective,
  ListGroupDirective,
  ListGroupItemDirective,
  RowComponent,
  TabDirective,
  TabPanelComponent,
  TabsComponent,
  TabsContentComponent,
  TabsListComponent,
  TextColorDirective
} 
from '@coreui/angular';
import { IconDirective } from '@coreui/icons-angular';

@Component({
  selector: 'app-produits-et-services',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, // Import ReactiveFormsModule
    RowComponent,
    ColComponent,
    TextColorDirective,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    DocsExampleComponent,
    NgTemplateOutlet,
    CardTitleDirective,
    CardTextDirective,
    ButtonDirective,
    CardSubtitleDirective,
    CardLinkDirective,
    RouterLink,
    ListGroupDirective,
    ListGroupItemDirective,
    CardFooterComponent,
    BorderDirective,
    CardGroupComponent,
    GutterDirective,
    CardImgDirective,
    TabsComponent,
    TabsListComponent,
    IconDirective,
    TabDirective,
    TabsContentComponent,
    TabPanelComponent
  ],
  templateUrl: './produits-et-services.component.html',
  styleUrls: ['./produits-et-services.component.scss']
})
export class ProduitsEtServicesComponent {
  selectedSection: string = '';
  selectedType: string = 'société';

  isAchetable: any;



  selectSection(section: string) {
    this.selectedSection = section;
  }

  
 
    
    isVendable: boolean = false;
    toggleAdditionalFields(event: any): void {
      this.isVendable = event.target.checked;
      this.isAchetable=event.target.checked;
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
     


      Clientobj : client = new client ();
      clientList : client [] =[] ;
      
      
      ngOnInit(): void {
        const localdata =localStorage.getItem("angular18crud");
        if(localdata!=null){
          this.clientList=JSON.parse(localdata)
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
        const isLocalPresent = localStorage.getItem("angular18crud");
        if(isLocalPresent != null) {
            const oldArray = JSON.parse(isLocalPresent);
            oldArray.push(this.Clientobj);
            localStorage.setItem('angular18crud', JSON.stringify(oldArray));
        } else {
            const newArr = [];
            newArr.push(this.Clientobj);
            localStorage.setItem('angular18crud', JSON.stringify(newArr));
        }
        
    }
    deleteClient(index: number) {
      this.clientList.splice(index, 1);
      localStorage.setItem('angular18crud', JSON.stringify(this.clientList));
    }  
    }
    export class client {
      nom:string 
      code:string
      type:string
      categorie:string
      description:string
      photo: string | undefined;
      constructor(){
        this.nom='',
        this.code=''
        this.type=''
        this.categorie=''
        this.description=''
      }
    }
        
      
    
    
     
  
      
    
    
  

