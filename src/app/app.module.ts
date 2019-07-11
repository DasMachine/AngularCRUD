import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { TodoListComponent } from "./todo-list/todo-list.component";
import { WhiteBoardComponent } from "./white-board/white-board.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { ProfileComponent } from "./profile/profile.component";
import { routing } from "./app.routing";
import { ColumnNavigatorComponent } from "./column-navigator/column-navigator.component";
import CourseService from "./services/CourseService";
import { CourseListComponent } from "./course-list/course-list.component";
import { CourseViewerComponent } from "./course-viewer/course-viewer.component";
import { ModuleListComponent } from "./module-list/module-list.component";
import { LessonTabsComponent } from "./lesson-tabs/lesson-tabs.component";

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    WhiteBoardComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    ColumnNavigatorComponent,
    CourseListComponent,
    CourseViewerComponent,
    ModuleListComponent,
    LessonTabsComponent
  ],
  imports: [BrowserModule, FormsModule, routing],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule {}
