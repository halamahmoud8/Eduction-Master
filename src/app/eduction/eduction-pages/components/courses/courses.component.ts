import { Filter } from './../../model/filter.model';
import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../services/eduction.services';
import * as _ from "lodash";
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.sass']
})
export class CoursesComponent implements OnInit {
  isOpen!: boolean;
  allCourses: any[] = [];
  allrequests: any[] = [];
  myCourses: any[] = [];
  displayedCourses: any[] = [];
  constructor(private courseService: CoursesService) { }

  ngOnInit(): void {
 
    this.getAllCourses();
    this.getAllRequests();
  }
  getAllCourses() {
    this.courseService.getCourses().subscribe(data => {
      this.allCourses = data
      this.displayedCourses = this.allCourses
    });
  }

  getAllRequests() {
    this.courseService.getAllRequests().subscribe(requests => {
      this.allrequests = requests
      this.getMyCourses(1233)
    });
  }

  getMyCourses(studentId: number) {
    const currentUser = this.allrequests.find(req => req.StudentId == studentId);
    if (currentUser) {
      currentUser.Courses.forEach((element: any) => {
        this.allCourses.forEach(course => {
          if (element.CourseId == course.CourseId) {
            course.added = true;
            this.myCourses.push(course);
          }
        })
      });
    }
  }

  addToCard(course: any) {
    this.myCourses.push(course);
  }
  changeFilterValue(filterValues: Filter[]) {
    this.displayedCourses = [];
    if (filterValues.length == 0) {
      this.displayedCourses = this.allCourses;
      return
    }
    filterValues.forEach(filter => {
      if (filter.isCategory) {
        if (filter.filterName == 'Other') {
          const fileredCourses = this.allCourses.filter(element =>
            element.CourseCategory !== "Development" && element.CourseCategory !== "Finance" && element.CourseCategory !== "IT & Software");
          this.displayedCourses = this.displayedCourses.concat(fileredCourses);
        } else {
          const fileredCourses = this.allCourses.filter(element => element.CourseCategory == filter.filterName);
          this.displayedCourses = this.displayedCourses.concat(fileredCourses);
        }
      }
      else {
        if (filter.filterName == 'Less than 2 hours') {
          const fileredCourses = this.allCourses.filter(element => element.CourseDuration < 2);
          this.displayedCourses.concat(fileredCourses);
        } else if (filter.filterName == 'From 2 to 10 hours') {
          const fileredCourses = this.allCourses.filter(element => element.CourseDuration >= 2 && element.CourseDuration <= 10);
          this.displayedCourses = this.displayedCourses.concat(fileredCourses);
        } else if (filter.filterName == 'more than 10 hours') {
          const fileredCourses = this.allCourses.filter((element) => (element.CourseDuration > 10));
          this.displayedCourses = this.displayedCourses.concat(fileredCourses);
        }
      }
    })
    this.displayedCourses = _.uniqBy(this.displayedCourses, 'CourseId');
  }
}
