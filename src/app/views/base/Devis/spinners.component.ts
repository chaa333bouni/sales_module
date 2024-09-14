import { Component } from '@angular/core';
import { DocsExampleComponent } from '@docs-components/public-api';
import { RowComponent, ColComponent, CardComponent, CardHeaderComponent, CardBodyComponent, SpinnerComponent, ButtonDirective } from '@coreui/angular';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-spinners',
    templateUrl: './spinners.component.html',
    styleUrls: ['./spinners.component.scss'],
    standalone: true,
    imports: [RowComponent,RouterLink, ColComponent,CommonModule , CardComponent, CardHeaderComponent, CardBodyComponent, DocsExampleComponent, SpinnerComponent, ButtonDirective]
})
export class SpinnersComponent {
  selectedSection=''
  constructor() { }
  selectSection(section: string) {
    this.selectedSection = section;
  }

  Clientobj : client = new client ();
  clientList : client [] =[] ;
  ngOnInit(): void {
    const localdata =localStorage.getItem("angular16crud");
    if(localdata!=null){
      this.clientList=JSON.parse(localdata)
    }
  }
  trackByIndex(index: number): number {
    return index;
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
    const isLocalPresent = localStorage.getItem("angular16crud");
    if(isLocalPresent != null) {
        const oldArray = JSON.parse(isLocalPresent);
        oldArray.push(this.Clientobj);
        localStorage.setItem('angular16crud', JSON.stringify(oldArray));
    } else {
        const newArr = [];
        newArr.push(this.Clientobj);
        localStorage.setItem('angular16crud', JSON.stringify(newArr));
    }
    this.closeeemodel()
}
deleteClient(index: number) {
  this.clientList.splice(index, 1);
  localStorage.setItem('angular16crud', JSON.stringify(this.clientList));
}  
}
export class client {
  nom:string 
  prenom:string
  totalHt:string
  numero_telephone:string
  societe:string
  constructor(){
    this.nom='',
    this.prenom=''
    this.totalHt=''
    this.numero_telephone=''
    this.societe=''
  }
}
