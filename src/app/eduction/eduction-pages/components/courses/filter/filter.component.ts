import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Filter } from '../../../model/filter.model';

@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.sass"],
})
export class FilterComponent implements OnInit {

  isOpen!: boolean;
  constructor() {}
  @Output() filterEventEmitter = new EventEmitter<Filter[]>();

  filterValues: Filter[] = []
  caterioes: string[] = [
    "Development",
    "Finance",
    "IT & Software",
    "Other",
  ]
  durations: string[] = [
    "Less than 2 hours",
    "From 2 to 10 hours",
    "more than 10 hours"
  ]

  openFilter() {
    this.isOpen = !this.isOpen;
  }
  onClickFilter(isCategory: boolean, filterValue: string) {
    const filterElement = this.filterValues.find(filter => filter.filterName == filterValue);
    if (filterElement) {
      this.filterValues = this.filterValues.filter(element => element.filterName != filterValue);
      this.filterEventEmitter.emit(this.filterValues);
    } else {
      const filterElement: Filter = { filterName: filterValue, isCategory: isCategory };
      this.filterValues.push(filterElement);
      this.filterEventEmitter.emit(this.filterValues);
    }
  }
  ngOnInit(): void {
    if (window.innerWidth > 768) {
      this.isOpen = true;
    } else {
      this.isOpen = false;
    }
    // let getStudentCourses = this.courseService.getStudentCourses(1239);
    // console.log("***",getStudentCourses);
    // let getCoursesByID = this.courseService.getCoursesByID(125);
    // console.log("++++",getCoursesByID);
  }

}
