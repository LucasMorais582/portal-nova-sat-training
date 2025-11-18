import { Component } from '@angular/core';
import { DashboardComponent } from "../../components/dashboard/dashboard.component";
import { CardComponent } from "../../components/card/card.component";

@Component({
  selector: 'app-dashboardpage',
  imports: [DashboardComponent, CardComponent],
  templateUrl: './dashboardpage.component.html',
  styleUrl: './dashboardpage.component.css'
})
export class DashboardpageComponent {

}
