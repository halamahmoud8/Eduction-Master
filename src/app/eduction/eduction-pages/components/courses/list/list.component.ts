import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {
  @Input() courseList: any = [];
  @Output() addToCardEmitter : EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  addToCard(course:any) {
    course.added=true;
    course.AvailableSeats -=1 ; 
    this.addToCardEmitter.emit(course);
  }


}
