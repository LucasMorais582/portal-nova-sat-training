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
  /** Grupo de formulário reativo para os dados do card */
  cardForm: FormGroup;

  /** Armazena a pré-visualização da imagem (Base64) */
  iconPreview: string | ArrayBuffer | null = null;

  constructor(private fb: FormBuilder, private cardService: CardService) {
    // Inicializa o formulário com validações
    this.cardForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      icon: ['', Validators.required] // Armazena a string Base64
    });
  }

  /**
   * Manipula a seleção de arquivo (imagem).
   * Converte a imagem selecionada para Base64 para pré-visualização e envio.
   * @param event Evento de mudança do input file
   */
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

  /**
   * Envia os dados do formulário para criar um novo card.
   * Se o formulário for válido, chama o serviço e reseta o formulário.
   */
  createCard() {
    if (this.cardForm.valid) {
      this.cardService.addCard(this.cardForm.value);
      this.cardForm.reset();
      this.iconPreview = null;
    }
  }
}
