import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { RouterModule } from '@angular/router';
import { CarouselComponent, SlideComponent } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})

export class AppComponent {
  title = 'gestion_smartphones';
}
