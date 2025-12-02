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

  onEdit(user: User) {
    this.edit.emit(user);
  }

  onDelete(user: User) {
    this.userToDelete = user;
    this.isModalOpen = true;
  }

  onConfirmDelete() {
    if (this.userToDelete) {
      this.delete.emit(this.userToDelete.id);
      this.isModalOpen = false;
      this.userToDelete = null;
    }
  }

  onCancelDelete() {
    this.isModalOpen = false;
    this.userToDelete = null;
  }

  onDetails(user: User) {
    this.userForDetails = user;
    this.isDetailsModalOpen = true;
  }

  onCloseDetails() {
    this.isDetailsModalOpen = false;
    this.userForDetails = null;
  }
}
