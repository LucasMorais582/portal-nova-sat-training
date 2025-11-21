import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contactpage',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contactpage.component.html',
  styleUrl: './contactpage.component.css'
})
export class ContactpageComponent {
  /** Formulário reativo de contato */
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Inicialização do formulário com validações
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  /**
   * Envia o formulário de contato.
   * Exibe um alerta de sucesso se o formulário for válido.
   */
  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form Submitted:', this.contactForm.value);
      alert('Mensagem enviada com sucesso! (Verifique o console)');
      this.contactForm.reset();
    } else {
      console.log('Form is invalid');
    }
  }
}
