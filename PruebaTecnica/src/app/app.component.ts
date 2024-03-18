import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FooterComponent } from './UI-Components/footer/footer.component';
import { UIComponentsModule } from './UI-Components/ui-components.module';
import { NavbarComponent } from './UI-Components/navbar/navbar.component';
import { UIPagesModule } from './UI-Pages/ui-pages.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    //ESTO DEBERIA HACERSE POR MODULOS, PARA CONCETRAR LA FUNCIONALIDAD DE CADA COMPONENTES/ENRUTAMIENTO
    //CON FIN DE NO SOBRECARGAR AL DE RESPONSABILIDAD A OTRO COMPONENTE DE ALGO QUE NO DEBE
    FooterComponent,
    NavbarComponent,
    UIComponentsModule,
    UIPagesModule,
    RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Method Prueba Tecnica';
}
