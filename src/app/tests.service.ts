import { Injectable } from '@angular/core';
import { Test } from './models/test';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestsService {

  constructor() { }

  getTests(): Observable<Test[]>{
    // return this.httpClient.get();    
    return of(this.tests);
  }

  private tests: Test[] = [
    {id: 1,	name: 'TestTerm1', description: 'Test Term 1'},
    {id: 2,	name: 'TestTerm2', description: 'Test Term 2'},
    {id: 3,	name: 'TestTerm3', description: 'Test Term 3'},
    {id: 4,	name: 'TestTerm4', description: 'Test Term 4'}
  ];

}
