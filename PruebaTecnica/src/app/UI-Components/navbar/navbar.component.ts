import { Component } from '@angular/core';
import { UIComponentsModule } from '../ui-components.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    UIComponentsModule,
    RouterModule
    
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
