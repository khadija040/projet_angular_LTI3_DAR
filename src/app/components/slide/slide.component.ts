import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'slide',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="slide" *ngIf="isVisible">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./slide.component.css'],
})
export class SlideComponent {
  @Input() isVisible = false;
}
