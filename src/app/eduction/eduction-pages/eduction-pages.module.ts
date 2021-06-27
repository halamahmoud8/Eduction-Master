import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EductionPagesRoutingModule } from './eduction-pages-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { CoursesComponent } from './components/courses/courses.component';
import { EductionPagesComponent } from './containers/eduction-pages/eduction-pages.component';
import { FilterComponent } from './components/courses/filter/filter.component';
import { ListComponent } from './components/courses/list/list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MyCoursesComponent } from './components/courses/my-courses/my-courses.component';


@NgModule({
  declarations: [ NavbarComponent, HeaderComponent, CoursesComponent, EductionPagesComponent, FilterComponent, ListComponent ,    MyCoursesComponent
  ],
  imports: [
    CommonModule,
    EductionPagesRoutingModule,
    ReactiveFormsModule
  ]
  
})
export class EductionPagesModule { }
