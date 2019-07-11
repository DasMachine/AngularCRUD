import { Component, OnInit } from '@angular/core';
import CourseService from '../services/CourseService';

@Component({
  selector: 'app-column-navigator',
  templateUrl: './column-navigator.component.html',
  styleUrls: ['./column-navigator.component.css']
})
export class ColumnNavigatorComponent implements OnInit {

  constructor(private service: CourseService) { }

  courses = []
  selectedCourse = {
    modules: []
  }
  selectedModule = {
    lessons: []
  }

  ngOnInit() {
    this.service.findAllCourses()
      .then(courses => this.courses = courses)
  }

  selectCourse = course =>
    this.selectedCourse = course

  selecteModule = module =>
    this.selectedModule = module

}
