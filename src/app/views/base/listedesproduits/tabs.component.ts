import { Component, signal } from '@angular/core';
import {
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  RoundedDirective,
  RowComponent,
  TabDirective,
  TabPanelComponent,
  TabsComponent,
  TabsContentComponent,
  TabsListComponent
} from '@coreui/angular';
import { IconDirective } from '@coreui/icons-angular';
import { RouterModule } from '@angular/router'; // Importez RouterModule
import { CommonModule } from '@angular/common';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  standalone: true,
  imports: [
    CardBodyComponent,
    CardComponent,
    CardHeaderComponent,
    ColComponent,
    RoundedDirective,
    CommonModule,
    RowComponent,
    TabDirective,
    TabPanelComponent,
    TabsComponent,
    TabsContentComponent,
    TabsListComponent,
    IconDirective,
    RouterModule // Ajoutez RouterModule ici
  ]
})
export class AppTabsComponent {

  selectedType: string = 'société'
    showCardContainer = true;
    showlist = false;
   
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
          localStorage.setItem('angular18crud', JSON.stringify(oldArray));
      } else {
          const newArr = [];
          newArr.push(this.Clientobj);
          localStorage.setItem('angular18crud', JSON.stringify(newArr));
      }
      this.closeeemodel()
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