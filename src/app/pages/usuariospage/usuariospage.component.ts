import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsuariosService } from '../../service/usuarios.service';
import { User } from '../../model/user';
import { UsuariosListComponent } from '../../components/usuarios-list/usuarios-list.component';
import { UsuariosFormComponent } from '../../components/usuarios-form/usuarios-form.component';

@Component({
  selector: 'app-usuariospage',
  imports: [CommonModule, FormsModule, UsuariosListComponent, UsuariosFormComponent],
  templateUrl: './usuariospage.component.html',
  styleUrl: './usuariospage.component.css',
})
export class UsuariospageComponent implements OnInit {
  users: User[] = [];
  filteredUsers: User[] = [];
  isEditing = false;
  currentUser: User | null = null;
  searchTerm = '';
  currentPage = 1;
  itemsPerPage = 5;

  constructor(private usuariosService: UsuariosService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.usuariosService.getUsers().subscribe(users => {
      this.users = users;
      this.filteredUsers = users;
      this.onSearch();
    });
  }

  onAdd() {
    this.isEditing = true;
    this.currentUser = null;
  }

  onEdit(user: User) {
    this.isEditing = true;
    this.currentUser = user;
  }

  onDelete(id: number) {
    this.usuariosService.deleteUser(id).subscribe(() => this.loadUsers());
  }

  onSave(userData: Partial<User>) {
    if (this.currentUser) {
      this.usuariosService.updateUser(userData as User).subscribe(() => {
        this.isEditing = false;
        this.loadUsers();
      });
    } else {
      this.usuariosService.addUser(userData as Omit<User, 'id'>).subscribe(() => {
        this.isEditing = false;
        this.loadUsers();
      });
    }
  }

  onCancel() {
    this.isEditing = false;
  }

  onSearch() {
    this.filteredUsers = this.users.filter(user =>
      user.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    this.currentPage = 1;
  }

  get paginatedUsers() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredUsers.slice(start, start + this.itemsPerPage);
  }

  nextPage() {
    if (this.currentPage * this.itemsPerPage < this.filteredUsers.length) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  get totalPages() {
    return Math.ceil(this.filteredUsers.length / this.itemsPerPage);
  }
}
