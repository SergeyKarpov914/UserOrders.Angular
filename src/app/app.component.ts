import { Component } from '@angular/core';  

@Component({
  selector: 'sk-root',
  templateUrl: './app.component.html',     // points to html in separate file
  styleUrls: ['./app.component.css']       
})
export class AppComponent {
  pageTitle = 'User Orders';
}
