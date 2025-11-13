import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() cardJson: object = {
    title: 'Default Title',
    description: 'Default Description',
    imageUrl: 'https://via.placeholder.com/150',
    linkUrl: '#'
  };
}
