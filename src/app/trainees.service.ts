import { Injectable } from '@angular/core';
import { Trainee } from './models/trainee';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TraineesService {

  constructor(private httpClient: HttpClient) { }

  getTrainees(): Observable<Trainee[]>{
    // return this.httpClient.get();    
    return of(this.trainees);
  }

  private trainees: Trainee[] = [
    {
    id:	1,
  	name: 'Tom B'
    },
    {
      id:	2,
      name: 'Balu Mmm'
    },
    {
      id:	3,
      name: 'Rita F'
    },
    {
      id:	5,
      name: 'test2 222'
    },
    {
      id:	3006,
      name: 'Ritulka'
    },
    {
      id:	3006,
      name: 'Updated T3'
    }
  ];

}
