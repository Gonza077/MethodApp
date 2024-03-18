import { Routes } from '@angular/router';
import { HomeComponent } from './UI-Pages/home/home.component';
import { MovieComponent } from './UI-Pages/movie/movie.component';

export const routes: Routes = [
    { 
        path: 'home', 
        component: HomeComponent 
    },
    { 
        path: 'home/:idFilm', 
        component: MovieComponent
    },
    //Default routes redirect home
    { 
        path: '**', 
        component: HomeComponent 
    },
];
