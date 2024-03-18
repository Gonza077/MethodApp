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

  obj = {
    "Title": "Blade Runner",
    "Year": "1982",
    "Rated": "R",
    "Released": "25 Jun 1982",
    "Runtime": "117 min",
    "Genre": "Action, Drama, Sci-Fi",
    "Director": "Ridley Scott",
    "Writer": "Hampton Fancher, David Webb Peoples, Philip K. Dick",
    "Actors": "Harrison Ford, Rutger Hauer, Sean Young",
    "Plot": "In the early twenty-first century, the Tyrell Corporation, during what was called the Nexus phase, developed robots, called \"replicants\", that were supposed to aid society, the replicants which looked and acted like humans. When the superhuman generation Nexus 6 replicants, used for dangerous off-Earth endeavors, began a mutiny on an off-Earth colony, replicants became illegal on Earth. Police units, called \"blade runners\", have the job of destroying - or in their parlance \"retiring\" - any replicant that makes its way back to or created on Earth, with anyone convicted of aiding or assisting a replicant being sentenced to death. It's now November, 2019 in Los Angeles, California. Rick Deckard, a former blade runner, is called out of retirement when four known replicants, most combat models, have made their way back to Earth, with their leader being Roy Batty. One, Leon Kowalski, tried to infiltrate his way into the Tyrell Corporation as an employee, but has since been able to escape. Beyond following Leon's trail in hopes of finding and retiring them all, Deckard believes part of what will help him is figuring out what the replicants wanted with the Tyrell Corporation in trying to infiltrate it. The answer may lie with Tyrell's fail-safe backup mechanism. Beyond tracking the four, Deckard faces a possible dilemma in encountering a fifth replicant: Rachael, who works as Tyrell's assistant. The issue is that Dr. Elden Tyrell is experimenting with her, to provide her with fake memories so as to be able to better control her. With those memories, Rachael has no idea that she is not human. The problem is not only Rachael's assistance to Deckard, but that he is beginning to develop feelings for her.",
    "Language": "English, German, Cantonese, Japanese, Hungarian, Arabic, Korean",
    "Country": "United States, United Kingdom",
    "Awards": "Nominated for 2 Oscars. 13 wins & 22 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "8.1/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "89%"
        },
        {
            "Source": "Metacritic",
            "Value": "84/100"
        }
    ],
    "Metascore": "84",
    "imdbRating": "8.1",
    "imdbVotes": "817,983",
    "imdbID": "tt0083658",
    "Type": "movie",
    "DVD": "09 Jun 2013",
    "BoxOffice": "$32,914,489",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
  }

  urlAPI = "http://www.omdbapi.com/?apikey=1c7866f6"

  constructor(
    private http: HttpClient
    ) {}

  getFilms(search : string, page ?:number){
    return this.http.get<any>(`${this.urlAPI}&s=${search}&page=${page}`);
  }

  getFilm(id : string){
    return this.http.get<any>(`${this.urlAPI}&i=${id}&plot=full`);
  }

  getFilmsLocal(){
    return this.data;
  }
  
  getFilmLocal(){
    return this.obj
  }

}
