import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.sass']
})
export class MyCoursesComponent implements OnInit {
  @Input() myCourses : any[] = [] ;
  constructor() { }

  ngOnInit(): void {
  }

}
