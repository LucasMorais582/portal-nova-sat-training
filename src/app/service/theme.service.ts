import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private currentThemeSubject = new BehaviorSubject<string>('light');
  public currentTheme$ = this.currentThemeSubject.asObservable();

  constructor() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    this.currentThemeSubject.next(savedTheme);
    this.applyTheme(savedTheme);
  }

  toggleTheme() {
    const newTheme = this.currentThemeSubject.value === 'light' ? 'dark' : 'light';
    this.currentThemeSubject.next(newTheme);
    localStorage.setItem('theme', newTheme);
    this.applyTheme(newTheme);
  }

  private applyTheme(theme: string) {
    document.body.className = theme;
  }
}
