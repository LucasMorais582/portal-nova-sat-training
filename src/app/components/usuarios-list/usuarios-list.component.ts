import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../model/user';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-usuarios-list',
  imports: [CommonModule, ModalComponent],
  templateUrl: './usuarios-list.component.html',
  styleUrl: './usuarios-list.component.css',
})
export class UsuariosListComponent {
  @Input() users: User[] = [];
  @Output() edit = new EventEmitter<User>();
  @Output() delete = new EventEmitter<number>();

  isModalOpen = false;
  userToDelete: User | null = null;

  isDetailsModalOpen = false;
  userForDetails: User | null = null;

  // Emite evento de edição
  onEdit(user: User) {
    this.edit.emit(user);
  }

  // Abre modal de confirmação de exclusão
  onDelete(user: User) {
    this.userToDelete = user;
    this.isModalOpen = true;
  }

  // Confirma exclusão e emite evento
  onConfirmDelete() {
    if (this.userToDelete) {
      this.delete.emit(this.userToDelete.id);
      this.isModalOpen = false;
      this.userToDelete = null;
    }
  }

  // Cancela exclusão e fecha modal
  onCancelDelete() {
    this.isModalOpen = false;
    this.userToDelete = null;
  }

  // Abre modal de detalhes
  onDetails(user: User) {
    this.userForDetails = user;
    this.isDetailsModalOpen = true;
  }

  // Fecha modal de detalhes
  onCloseDetails() {
    this.isDetailsModalOpen = false;
    this.userForDetails = null;
  }
}
