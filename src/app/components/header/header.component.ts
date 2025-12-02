import { Component } from '@angular/core';
import { ThemeService } from '../../service/theme.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private themeService: ThemeService) {}

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
