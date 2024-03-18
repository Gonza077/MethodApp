import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../Services/api-service.service';
import { UIComponentsModule } from '../../UI-Components/ui-components.module';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [
    UIComponentsModule
  ],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent implements OnInit{

  movie !: any;

  constructor(
    private apiService : ApiService,
    private route :ActivatedRoute
  ){}

  ngOnInit(): void {
    this.apiService.getFilm(this.route.snapshot.params['idFilm']).subscribe(
      (data : any) =>{
        console.log(data);
        this.movie = data
      } 
    )
    console.log(this.movie)
  }

  like(){
    alert("Se dio voto positivo a la Pelicula")
  }

  dislike(){
    alert("Se dio voto negativo a la Pelicula")
  }

}
