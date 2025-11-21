import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  /** Título do card */
  @Input() title: string = '';
  /** Descrição do card */
  @Input() description: string = '';
  /** URL ou Base64 do ícone do card */
  @Input() icon: string = '';
}
