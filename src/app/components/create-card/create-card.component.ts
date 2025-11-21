import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CardService } from '../../service/card.service';

@Component({
  selector: 'app-create-card',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css']
})
export class CreateCardComponent {
  cardForm: FormGroup;
  iconPreview: string | ArrayBuffer | null = null;

  constructor(private fb: FormBuilder, private cardService: CardService) {
    this.cardForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      icon: ['', Validators.required] // Stores the base64 string
    });
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.iconPreview = reader.result;
        this.cardForm.patchValue({ icon: reader.result });
      };
      reader.readAsDataURL(file);
    }
  }

  createCard() {
    if (this.cardForm.valid) {
      this.cardService.addCard(this.cardForm.value);
      this.cardForm.reset();
      this.iconPreview = null;
    }
  }
}
