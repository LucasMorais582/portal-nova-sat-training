import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-card',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css']
})
export class CreateCardComponent {
  static nextId = 1;

  card = {
    id: 0,
    title: '',
    description: '',
    icon: ''
  };

  @Output() cardCreated = new EventEmitter<any>();
  iconPreview: string | ArrayBuffer | null = null;

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.iconPreview = reader.result;
        this.card.icon = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  createCard() {
    this.card.id = CreateCardComponent.nextId++;
    this.cardCreated.emit({ ...this.card });

    // Resetar o formulário e o objeto
    this.card = { id: 0, title: '', description: '', icon: '' };
    this.iconPreview = null;
  }
}
