import { Component, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'crud_app';

  constructor(private router:Router){}

  isCurrentRouteHome():boolean{
    return this.router.url === '/'
  }
}