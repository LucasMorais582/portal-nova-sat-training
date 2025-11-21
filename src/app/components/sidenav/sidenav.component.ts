import { Component, ViewChild } from '@angular/core';
import { MatButtonModule} from '@angular/material/button';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";



@Component({
  selector: 'app-sidenav',
  imports: [MatButtonModule, MatSidenavModule, MatListModule, CommonModule, RouterLink],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {
  /** Referência ao componente MatSidenav para controle programático */
  @ViewChild('drawer') drawer!: MatSidenav;

  /** Controla a exibição do ícone da seta (direita/esquerda) */
  showFiller: boolean = false;

  /** Controla a visibilidade do menu mobile */
  isMobileMenuOpen: boolean = false;

  /**
   * Alterna a visibilidade da sidebar desktop e atualiza o ícone da seta.
   */
  toggleSidebar(): void {
    this.drawer.toggle();
    this.showFiller = !this.showFiller;
  }

  /**
   * Alterna a visibilidade do menu mobile.
   */
  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
