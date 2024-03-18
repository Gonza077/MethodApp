import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  data = {
    "Search": [
        {
            "Title": "Blade Runner",
            "Year": "1982",
            "imdbID": "tt0083658",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
        },
        {
            "Title": "Blade Runner 2049",
            "Year": "2017",
            "imdbID": "tt1856101",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_SX300.jpg"
        },
        {
            "Title": "The Maze Runner",
            "Year": "2014",
            "imdbID": "tt1790864",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjUyNTA3MTAyM15BMl5BanBnXkFtZTgwOTEyMTkyMjE@._V1_SX300.jpg"
        },
        {
            "Title": "Maze Runner: The Scorch Trials",
            "Year": "2015",
            "imdbID": "tt4046784",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjE3MDU2NzQyMl5BMl5BanBnXkFtZTgwMzQxMDQ3NTE@._V1_SX300.jpg"
        },
        {
            "Title": "Maze Runner: The Death Cure",
            "Year": "2018",
            "imdbID": "tt4500922",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTYyNzk3MDc2NF5BMl5BanBnXkFtZTgwMDk3OTM1NDM@._V1_SX300.jpg"
        },
        {
            "Title": "The Kite Runner",
            "Year": "2007",
            "imdbID": "tt0419887",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BOWM5Yzg4ODctM2ViMC00ZGEzLWI2YzEtZDYwY2E4YTBhYTY1XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
        },
        {
            "Title": "Runner Runner",
            "Year": "2013",
            "imdbID": "tt2364841",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTU5OTA0MjI4Ml5BMl5BanBnXkFtZTgwMTgxOTQwMDE@._V1_SX300.jpg"
        },
        {
            "Title": "The Front Runner",
            "Year": "2018",
            "imdbID": "tt7074886",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTcyNTAxOTg4NV5BMl5BanBnXkFtZTgwMTMwNjQ2NjM@._V1_SX300.jpg"
        },
        {
            "Title": "The Maze Runner: Finding the Gang",
            "Year": "2014",
            "imdbID": "tt4206510",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BM2E0MDEwYTMtZmU0NC00MWQ5LWFhZmMtMzBhNTQ5Yjg3NTEzXkEyXkFqcGdeQXVyNTI0NzIxMjY@._V1_SX300.jpg"
        },
        {
            "Title": "The Road Runner Show",
            "Year": "1966–1973",
            "imdbID": "tt0060019",
            "Type": "series",
            "Poster": "https://m.media-amazon.com/images/M/MV5BYzRkYWU2ZTUtOWZiYy00ZGRkLTkxOTgtODg5ZTEzNGM3ZDdmXkEyXkFqcGdeQXVyODk1MjAxNzQ@._V1_SX300.jpg"
        }
    ],
    "totalResults": "370",
    "Response": "True"
}

  urlAPI = "http://www.omdbapi.com/?apikey=1c7866f6"

  constructor(
    private http: HttpClient
    ) {}

  getFilms(search : string, page ?:number){
    return this.http.get<any>(`${this.urlAPI}&s=${search}&page=${page}`);
  }

  getFilmsLocal(){
    return this.data;
  }

}
