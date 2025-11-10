import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { RouterOutlet } from "@angular/router";


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  imports: [CommonModule, RouterOutlet]
})
export class SidebarComponent {

  isOpened : boolean = true;


  toggleSidebar(): void {
    this.isOpened = !this.isOpened;
  }
}
