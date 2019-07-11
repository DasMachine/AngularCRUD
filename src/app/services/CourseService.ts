import { Injectable } from "@angular/core";

@Injectable()
export default class CourseService {
  findAllCourses = () =>
    fetch("http://localhost:3000/api/courses").then(response =>
      response.json()
    );
}
