import { Component, OnInit } from '@angular/core';
import { TestsService } from '../tests.service';
import { Observable } from 'rxjs';
import { Test } from '../models/test';

@Component({
  selector: 'tests-list',
  templateUrl: './tests-list.component.html',
  styleUrls: ['./tests-list.component.css']
})
export class TestsListComponent implements OnInit {
  tests: Test[] = [];

  constructor(private testsService: TestsService) { }

  ngOnInit() {
    this.getTests().subscribe(
      list => {
        console.log(list);
        this.tests = list;
      }
      );
  }

  getTests(): Observable<Test[]>{
    return this.testsService.getTests();
  }

}
