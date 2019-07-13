import { Component, OnInit } from '@angular/core';
import { Trainee } from '../models/trainee';
import { TraineesService } from '../trainees.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'trainees-list',
  templateUrl: './trainees-list.component.html',
  styleUrls: ['./trainees-list.component.css']
})
export class TraineesListComponent implements OnInit {
  trainees: Trainee[] = [];

  constructor(private traineesService: TraineesService) { }

  ngOnInit() {
    this.getTrainees().subscribe(
      list => {
        console.log(list);
        this.trainees = list;
      }
      );
  }

  getTrainees(): Observable<Trainee[]>{
    return this.traineesService.getTrainees();
  }
}
