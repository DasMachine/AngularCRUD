import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-lesson-tabs",
  templateUrl: "./lesson-tabs.component.html",
  styleUrls: ["./lesson-tabs.component.css"]
})
export class LessonTabsComponent implements OnInit {
  constructor(private router: ActivatedRoute) {}

  courseId = "";
  moduleId = "";
  lessonId = "";
  lessons = [];

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.courseId = params["cid"];
      this.moduleId = params["mid"];
      this.lessonId = params["lid"];
    });
  }
}
