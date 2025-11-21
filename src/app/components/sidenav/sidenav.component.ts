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
@ViewChild('drawer') drawer!: MatSidenav;

showFiller: boolean = false;

  isMobileMenuOpen: boolean = false;

  toggleSidebar(): void {
    this.drawer.toggle();
    this.showFiller = !this.showFiller;
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
