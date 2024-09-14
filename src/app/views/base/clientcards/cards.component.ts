import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  // Import CommonModule
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
  LocalStorageService,
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
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
  standalone: true,
  imports: [
    CommonModule,  // Add CommonModule here
    RowComponent,
    ColComponent,
    TextColorDirective,
    CardComponent,
    CardHeaderComponent,
    FormsModule,
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
  ]
})
  export class CardsComponent implements OnInit {
    selectedType: string = 'société'
    showCardContainer = true;
    showlist = false;
   
    Clientobj : client = new client ();
    clientList : client [] =[] ;
    ngOnInit(): void {
      const localdata =localStorage.getItem("angular17crud");
      if(localdata!=null){
        this.clientList=JSON.parse(localdata)
      }
    }
    trackByIndex(index: number): number {
      return index;
    }
    toggleCardContainer() {
      this.showCardContainer = true;
      this.showlist = false;
      

    }
    togglelist() {
      this.showCardContainer = false;
      this.showlist = true;
    }
    openModal() {
      const modalElement = document.getElementById('myModal');
      if (modalElement) {
        const modal = new (window as any).bootstrap.Modal(modalElement);
        modal.show();
      }
    }  
    closeeemodel() {
      const modalElement = document.getElementById('myModal');
      if (modalElement) {
        const modal = (window as any).bootstrap.Modal.getInstance(modalElement);
        if (modal) {
          modal.hide();
        }
      }
    }
    editClient(item : client){
      this.Clientobj=item
      this.openModal()
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
      this.closeeemodel()
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
      this.photo=''
    }
  }
