import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SmartphoneFormComponent } from "./components/smartphone-form/smartphone-form.component";
import { DashboardAdminComponent } from "./components/dashboard-admin/dashboard-admin.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DashboardAdminComponent, SmartphoneFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gestion_smartphones';
}
