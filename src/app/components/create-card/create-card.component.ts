import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon'; // Importante para o preview
import { CardService } from '../../service/card.service';
import { CommonModule } from '@angular/common'; // Caso precise de diretivas comuns

@Component({
  selector: 'app-create-card',
  standalone: true,
  imports: [ReactiveFormsModule, MatIconModule, CommonModule], // Adicione MatIconModule
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css']
})
export class CreateCardComponent {
  cardForm: FormGroup;
  iconPreview: string | ArrayBuffer | null = null;

  // Controla qual input está visível
  inputType: 'image' | 'icon' = 'image';

  constructor(private fb: FormBuilder, private cardService: CardService) {
    this.cardForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      icon: ['', Validators.required],
      // Adicionamos um campo para salvar se é 'image' ou 'icon'
      type: ['image', Validators.required]
    });
  }

  // Função para trocar o modo de input
  switchInputType(type: 'image' | 'icon') {
    this.inputType = type;
    this.cardForm.get('type')?.setValue(type);

    // Limpa o valor anterior do ícone para evitar erros
    this.cardForm.get('icon')?.setValue('');
    this.iconPreview = null;
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
      // Envia o objeto completo (agora inclui o campo 'type')
      this.cardService.addCard(this.cardForm.value);

      this.cardForm.reset({ type: 'image' }); // Reseta mantendo o padrão imagem
      this.inputType = 'image';
      this.iconPreview = null;
    }
  }
}
