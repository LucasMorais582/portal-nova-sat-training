import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsuariosService } from '../../service/usuarios.service';
import { User } from '../../model/user';
import { UsuariosListComponent } from '../../components/usuarios-list/usuarios-list.component';
import { UsuariosFormComponent } from '../../components/usuarios-form/usuarios-form.component';
import { ModalComponent } from '../../components/modal/modal.component';

@Component({
  selector: 'app-usuariospage',
  imports: [CommonModule, FormsModule, UsuariosListComponent, UsuariosFormComponent, ModalComponent],
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

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit() {
    this.loadUsers();
  }

  // Carrega os usuários do serviço
  loadUsers() {
    this.usuariosService.getUsers().subscribe(users => {
      this.users = users;
      this.filteredUsers = users;
      this.onSearch();
    });
  }

  // Inicia a adição de um novo usuário
  onAdd() {
    this.isEditing = true;
    this.currentUser = null;
  }

  // Inicia a edição de um usuário existente
  onEdit(user: User) {
    this.isEditing = true;
    this.currentUser = user;
  }

  // Deleta um usuário
  onDelete(id: number) {
    this.usuariosService.deleteUser(id).subscribe();
  }

  // Salva (cria ou atualiza) um usuário
  onSave(userData: Partial<User>) {
    if (this.currentUser) {
      this.usuariosService.updateUser(userData as User).subscribe(() => {
        this.isEditing = false;
      });
    } else {
      this.usuariosService.addUser(userData as Omit<User, 'id'>).subscribe(() => {
        this.isEditing = false;
      });
    }
  }

  // Cancela a edição/criação
  onCancel() {
    this.isEditing = false;
  }

  // Filtra usuários com base no termo de busca
  onSearch() {
    this.filteredUsers = this.users.filter(user =>
      user.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    this.currentPage = 1;
  }

  // Retorna os usuários da página atual
  get paginatedUsers() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredUsers.slice(start, start + this.itemsPerPage);
  }

  // Vai para a próxima página
  nextPage() {
    if (this.currentPage * this.itemsPerPage < this.filteredUsers.length) {
      this.currentPage++;
    }
  }

  // Vai para a página anterior
  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  // Retorna o número total de páginas
  get totalPages() {
    return Math.ceil(this.filteredUsers.length / this.itemsPerPage);
  }

  // Retorna o título do modal
  get modalTitle(): string {
    return this.currentUser ? 'Editar Usuário' : 'Novo Usuário';
  }
}
