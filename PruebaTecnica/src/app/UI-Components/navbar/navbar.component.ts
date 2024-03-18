import { Component } from '@angular/core';
import { UIComponentsModule } from '../ui-components.module';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [UIComponentsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
