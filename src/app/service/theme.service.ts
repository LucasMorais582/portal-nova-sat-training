import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private currentThemeSubject = new BehaviorSubject<string>('light');
  public currentTheme$ = this.currentThemeSubject.asObservable();

  constructor() {
    // Carrega o tema salvo ou usa 'light' como padrão
    const savedTheme = localStorage.getItem('theme') || 'light';
    this.currentThemeSubject.next(savedTheme);
    this.applyTheme(savedTheme);
  }

  // Alterna entre os temas claro e escuro
  toggleTheme() {
    const newTheme = this.currentThemeSubject.value === 'light' ? 'dark' : 'light';
    this.currentThemeSubject.next(newTheme);
    localStorage.setItem('theme', newTheme);
    this.applyTheme(newTheme);
  }

  // Aplica a classe do tema ao body do documento
  private applyTheme(theme: string) {
    document.body.className = theme;
  }
}
