import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CardService } from 'src/app/services/card.service';  // Importez le service que nous allons créer

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent {
  clientForm: FormGroup;

  constructor(private fb: FormBuilder, private cardService: CardService, private router: Router) {
    this.clientForm = this.fb.group({
      companyName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      // Ajoutez d'autres champs si nécessaire
    });
  }

  onSubmit() {
    if (this.clientForm.valid) {
      this.cardService.addCard(this.clientForm.value);
      this.router.navigate(['/cards']);
    }
  }
}
