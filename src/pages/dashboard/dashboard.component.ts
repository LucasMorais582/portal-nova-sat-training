import { Component } from '@angular/core';
import {NavbarComponent} from '../../widgets/layout/navbar/navbar.component';
import { HeaderComponent } from "../../widgets/layout/header/header.component";
import {CardComponent} from "../../shared/card/ui/card.component";

@Component({
  selector: 'app-dashboard',
  imports: [
    NavbarComponent,
    HeaderComponent,
    CardComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
