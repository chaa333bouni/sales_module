import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DocsExampleComponent } from '@docs-components/public-api';
import { RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, TooltipDirective, ButtonDirective } from '@coreui/angular';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-tooltips',
    templateUrl: './tooltips.component.html',
    styleUrls: ['./tooltips.component.scss'],
    standalone: true,
    imports: [RowComponent, ColComponent,FormsModule,ReactiveFormsModule,CommonModule, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, DocsExampleComponent, TooltipDirective, RouterLink, ButtonDirective]
})
export class TooltipsComponent {
  selectedSection=''
  devisForm: FormGroup;
  currentStatus = 'brouillon';
  totalHT = 0;
  totalTVA = 0;
  totalTTC = 0;
  clientInput: string = '';
    items = [
      { title: 'Suivi', content: 'Content for Suivi', isExpanded: false },
      { title: 'Caractéristiques', content: 'Content for Caractéristiques', isExpanded: false },
      { title: 'Références', content: 'Content for Références', isExpanded: false },
      { title: 'Marge', content: 'Content for Marge', isExpanded: false },
      { title: 'Dates', content: 'Content for Dates', isExpanded: false }
    ];
    unites = [
      { libelle: 'Unité A', type: 'Type 1' },
      { libelle: 'Unité B', type: 'Type 2' },
      // Add more units as needed
    ];
  produitForm: FormGroup;
    logClientInput() {
      console.log(this.clientInput);
    }
    toggleItem(item: any) {
      item.isExpanded = !item.isExpanded;
    }
  
  constructor(private fb: FormBuilder) {
    this.devisForm = this.fb.group({
      societe: [''],
      client: [''],
      devise: [''],
      numeroVersion: [''],
      adresseFacturation: [''],
      adresseLivraison: [''],
    });
    this.produitForm = this.fb.group({
      type: ['Standard'],
      libelleProduit: [''],
      qte: [1],
      unite: [''],
      prixUnitaireHT: [0],
      typeRemise: ['Aucune remise'],
      taxe: [''],
      totalHT: [{ value: 0, disabled: true }] // Disabled because it's a calculated field
    });
    this.calculateTotalPrixHT();
  }
  selectSection(section: string) {
    this.selectedSection = section;
  }
  changeStatus(status: string) {
    this.currentStatus = status;
  }
  closeeemodel() {
    const modalElement = document.getElementById('myModall');
    if (modalElement) {
      const modal = (window as any).bootstrap.Modal.getInstance(modalElement);
      if (modal) {
        modal.hide();
      }
    }
  }
  
  finalizeDevis() {
    this.changeStatus('finalisé');
    // Logique pour calculer les totaux et autres actions
  }

  cancelDevis() {
    this.changeStatus('annulé');
    // Logique pour annuler le devis
  }
  isMenuOpen: string | null = null;
  data = [
    { code: '123', libelle: 'Produit A', qte: 10, unite: 'Pièce', prixHT: 50.00, totalHT: 500.00, dateExpedition: '20/08/2024' },
    { code: '124', libelle: 'Produit B', qte: 5, unite: 'Kg', prixHT: 20.00, totalHT: 100.00, dateExpedition: '22/08/2024' },

  ];
  calculateTotalPrixHT(): void {
    this.totalHT = this.data.reduce((sum, item) => sum + item.prixHT, 0);
  }
  sortedData = [...this.data];

  toggleMenu(event: Event, column: string): void {
    event.stopPropagation();
    this.isMenuOpen = this.isMenuOpen === column ? null : column;
  }
 
  sortTable(column: string, order: 'asc' | 'desc'): void {
    this.sortedData = [...this.data].sort((a, b) => {
      const aValue = a[column as keyof typeof a];
      const bValue = b[column as keyof typeof b];
  
      if (order === 'asc') {
        return aValue > bValue ? 1 : aValue < bValue ? -1 : 0;
      } else {
        return aValue < bValue ? 1 : aValue > bValue ? -1 : 0;
      }
    });
    this.isMenuOpen = null; // Fermer le menu après le tri
  }
  openModal() {
    const modalElement = document.getElementById('myModall');
    if (modalElement) {
      const modal = new (window as any).bootstrap.Modal(modalElement);
      modal.show();
    }
    
  }

  selectUnite(unite: any) {
    this.produitForm.patchValue({ unite: unite.libelle });
    // Close the modal after selection
    const modal = document.getElementById('uniteModal');
    if (modal) {
      const bsModal =new (window as any).bootstrap.Modal.getInstance(modal);
      bsModal?.hide();
    }
  }
  onSubmit() {
    console.log(this.produitForm.value);
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
  
}
deleteClient(index: number) {
  this.clientList.splice(index, 1);
  localStorage.setItem('angular16crud', JSON.stringify(this.clientList));
}  
}
export class client {
  nom:string 
  produit:string
  totalHt:string
  numero_telephone:string
  societe:string
  qte:Number
  unite:string
  prixun:Number

  constructor(){
    this.nom='',
    this.produit=''
    this.totalHt=''
    this.numero_telephone=''
    this.societe=''
    this.qte= 0
    this.unite=''
    this.prixun=0
  }
}
 
 

