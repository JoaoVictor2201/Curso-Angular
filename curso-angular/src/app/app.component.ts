import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName: string = 'João';
  userData = {
    email: 'franca.jv@hotmail.com',
    role: 'admin',
  }
  title = 'curso-angular';
}
