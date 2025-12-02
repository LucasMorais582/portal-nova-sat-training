import { Component } from '@angular/core';
import { HeaderComponent } from "../../../widgets/layout/header/header.component";
import { NavbarComponent } from "../../../widgets/layout/navbar/navbar.component";
import { UsersServiceService } from '../service/usersService.service';
import { UsersInterface} from '../interface/UsersInterface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users-form',
  imports: [HeaderComponent, NavbarComponent, CommonModule],
  templateUrl: './users-form.component.html',
  styleUrl: './users-form.component.css'
})
export class UsersFormComponent {

  newUser = {
    name: 'helio',
    email: 'teste@teste.com',
    password: '12345'
  }

  listaUsuarios: UsersInterface[] = [];

  constructor(public userService: UsersServiceService){}


  getListaUsuarios(): void{
    this.userService.getAll().subscribe((user) => this.listaUsuarios = user)
  }

  postAdicionarUsuarios(): void{
    this.userService.postUser(this.newUser).subscribe({
      next: (response) => {
        console.log('Post criado com sucesso', response);
        this.newUser = {name: '', email: '', password: ''};
      }
    })
  }
}
