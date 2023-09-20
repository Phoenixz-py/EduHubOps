import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateStudentComponent } from './create-student/create-student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { GetStudentComponent } from './get-student/get-student.component';

const routes: Routes = [
  { path: 'create-student', component: CreateStudentComponent },
  { path: 'student-list', component: StudentListComponent },
  { path: 'student/:id', component: GetStudentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
