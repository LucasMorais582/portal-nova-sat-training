import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-externopage',
  imports: [CommonModule],
  templateUrl: './externopage.component.html',
  styleUrl: './externopage.component.css',
})
export class ExternopageComponent implements OnInit {
  users: any[] = [];
  loading = false;
  error: string | null = null;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.loadUsers();
  }

  // Carrega usuários da API externa
  loadUsers() {
    this.loading = true;
    this.error = null;
    this.apiService.getExternalUsers().subscribe({
      next: (data) => {
        this.users = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Erro ao carregar dados. Tente novamente.';
        this.loading = false;
      }
    });
  }

  // Tenta carregar novamente em caso de erro
  retry() {
    this.loadUsers();
  }
}
