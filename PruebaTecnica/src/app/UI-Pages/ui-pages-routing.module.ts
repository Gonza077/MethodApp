import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';

//Tuve unos problemas con esta parte, dado que como anteriormente estaba trabajando con versiones de Angular 
// Menores a la 17 (v16/v15/v14), permitia manejar las rutas de cada modulo de esta forma, 
//sin sobrecargar las rutas del app.routes.ts

const routes: Routes = [  
  { 
      path: 'home', 
      component: HomeComponent 
  },
  { 
    path: '', 
    redirectTo: 'home', pathMatch: "full" 
  },
  { 
    path: 'home/:idFilm', 
    component: MovieComponent
  },
  { 
    path: '**', 
    component: HomeComponent 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UIPagesRoutingModule { }
