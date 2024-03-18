import { Component, OnInit } from '@angular/core';
import { UIComponentsModule } from '../../UI-Components/ui-components.module';
import { ApiService } from '../../Services/api-service.service';
import { RouterModule } from '@angular/router';
import { CardComponent } from '../../UI-Components/card/card.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ 
    UIComponentsModule,
    RouterModule,
    CardComponent,
    ReactiveFormsModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  filmsTemp  !: any;
  totalFilms !: number;

  profileForm = new FormGroup({
    inputSearch : new FormControl('Runner'),
  });

  constructor(
    private apiService : ApiService,
  ){}
  
  ngOnInit(): void {
    this.filmsTemp = this.apiService.getFilmsLocal().Search;
    //this.getFilms(this.profileForm.value.inputSearch,1);
    this.totalFilms = 10;
  }

  getFilms(value : any, page? :number){
    this.apiService.getFilms(value, page ).subscribe(
      (data : any) =>{
        if (data.Error){
          alert(data.Error)
        }else
        {
          this.filmsTemp = data.Search
          this.totalFilms = data.totalResults;
        }
      }
    )
  }

  onSubmit(value: any){
    this.getFilms(value.inputSearch);
  }

  handlePageEvent(e: PageEvent) {
    this.getFilms(this.profileForm.value.inputSearch, e.pageIndex+1); 
  }
}
