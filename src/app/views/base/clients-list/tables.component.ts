import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListGroupModule } from '@coreui/angular';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss'],
  standalone: true,
  imports: [CommonModule,ListGroupModule] // Ajouter CommonModule ici
})
export class TablesComponent implements OnInit {
  clientList: client[] = [];

  ngOnInit(): void {
    const localData = localStorage.getItem("angular17crud");
    if (localData) {
      this.clientList = JSON.parse(localData);
    }
  }
}

class client {
  nom: string = '';
  prenom: string = '';
  email: string = '';
  numero_telephone: string = '';
}
