import { Component } from '@angular/core';
import { HeaderComponent } from "../../../widgets/layout/header/header.component";
import { NavbarComponent } from "../../../widgets/layout/navbar/navbar.component";

@Component({
  selector: 'app-users-form',
  imports: [HeaderComponent, NavbarComponent],
  templateUrl: './users-form.component.html',
  styleUrl: './users-form.component.css'
})
export class UsersFormComponent {

}
