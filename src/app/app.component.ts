import { Component } from '@angular/core';  

@Component({
  selector: 'sk-root',
  template: `
    <nav class='navbar navbar-expand navbar-light bg-light'>
        <a class='navbar-brand'>{{pageTitle}}</a>
        <ul class='nav nav-pills'>
          <li><a class='nav-link' routerLinkActive='active' routerLink='/users'>Users</a></li>
          <li><a class='nav-link' routerLinkActive='active' routerLink='/orders'>Orders</a></li>
          <li><a class='nav-link' routerLinkActive='active' routerLink='/orders-list'>Orders by User</a></li>
        </ul>
    </nav>
    <div class='container'>
     <router-outlet></router-outlet>
    </div>
    `,
styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'Angular exersise project by Sergey Karpov';
}
