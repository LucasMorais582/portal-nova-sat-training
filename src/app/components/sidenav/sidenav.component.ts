import { Component, ViewChild } from '@angular/core';
import { MatButtonModule} from '@angular/material/button';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-sidenav',
  imports: [MatButtonModule, MatSidenavModule, MatListModule,CommonModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {
@ViewChild('drawer') drawer!: MatSidenav;

showFiller: boolean = true;

  toggleSidebar(): void {
    this.drawer.toggle();
    this.showFiller = this.showFiller;


    if(this.showFiller == true){
      this.showFiller = false;
    }
    else {
      this.showFiller = true;
    }
    console.log(this.showFiller);
}
}
