import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { SidenavComponent } from "../../components/sidenav/sidenav.component";
import {  RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-home',
  imports: [HeaderComponent, SidenavComponent, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  /** Controla a visibilidade da sidebar */
  public isSidenavVisible = false;

  /**
   * Alterna a visibilidade da sidebar.
   */
  toggleSidenav(): void {
    this.isSidenavVisible = !this.isSidenavVisible;
  }

  /**
   * Fecha a sidebar.
   */
  closeSidenav(): void {
    this.isSidenavVisible = false;
  }
}
