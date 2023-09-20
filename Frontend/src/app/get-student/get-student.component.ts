import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-get-student',
  templateUrl: './get-student.component.html',
  styleUrls: ['./get-student.component.css'],
})
export class GetStudentComponent implements OnInit {
  student: any;
  searchForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private studentService: StudentService
  ) {
    this.searchForm = this.formBuilder.group({
      id: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    const studentId = this.searchForm.value.id;

    this.studentService.getStudentById(studentId).subscribe((data: any) => {
      this.student = data.student; // Assign the fetched student data to the 'student' variable
    });
  }
}
