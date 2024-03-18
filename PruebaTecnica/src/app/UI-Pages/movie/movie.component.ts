import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent implements OnInit{

  constructor(
    private route :ActivatedRoute
  ){}

  ngOnInit(): void {
    console.log(this.route.snapshot.params['idFilm'])
  }

}
