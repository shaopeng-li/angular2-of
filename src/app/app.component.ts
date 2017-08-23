import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isActive(): Boolean {
    return (location.pathname.includes("skillDetail") || location.pathname.includes("skillList"));
  }
}
