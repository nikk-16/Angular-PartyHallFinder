import { Component, Input } from '@angular/core';
import { Reviews } from 'src/shared/models/user.model';

@Component({
  selector: 'app-review-card',
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.css']
})
export class ReviewCardComponent {
@Input() review!: Reviews;
}
