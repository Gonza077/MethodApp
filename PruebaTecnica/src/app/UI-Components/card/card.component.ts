import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UIComponentsModule } from '../ui-components.module';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ 
    RouterModule,
    UIComponentsModule
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input()
  movie !: any;
  
  constructor(){

  }
  
  showMessage(movie : string){
    console.log(movie)
  }


}
