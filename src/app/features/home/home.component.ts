import { Component } from '@angular/core';
//import { SidebarComponent } from "../../components/sidebar/sidebar.component";
import { CardComponent } from "../../components/card/card.component";
import { HeaderComponent } from "../../components/header/header.component";
import { SidenavComponent } from "../../components/sidenav/sidenav.component";


@Component({
  selector: 'app-home',
  imports: [CardComponent, HeaderComponent, SidenavComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
