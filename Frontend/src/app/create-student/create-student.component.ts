import { Component } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css'],
})
export class CreateStudentComponent {
  student: any = {
    name: '',
    age: 0,
    email: '',
    class: 0,
  };

  constructor(private studentService: StudentService) { }

  onSubmit() {
    this.studentService.createStudent(this.student).subscribe(
      (response: any) => {
        // Handle success here
        console.log('Student created successfully:', response);

        // Clear the form after successful creation (optional)
        this.clearForm();
      },
      (error: any) => {
        // Handle error here
        console.error('Error creating student:', error);
      }
    );
  }

  clearForm() {
    // Clear the form fields after submission (optional)
    this.student.name = '';
    this.student.age = 0;
    this.student.email = '';
    this.student.class = 0;
  }
}
