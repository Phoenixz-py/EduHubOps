// import { Component, OnInit } from '@angular/core';
// import { StudentService } from '../student.service';
// import { HttpClient } from '@angular/common/http';


// @Component({
//   selector: 'app-student-list',
//   templateUrl: './student-list.component.html',
//   styleUrls: ['./student-list.component.css'],
// })
// export class StudentListComponent implements OnInit {
//   students: any[] = []; // Initialize as an empty array

//   constructor(private studentService: StudentService, private http: HttpClient) { }



//   ngOnInit(): void {
//     this.getStudents();
//   }

//   getStudents(): void {
//     this.studentService.getAllStudents().subscribe((data: any) => {
//       this.students = data.students; // Access the 'students' array
//     });
//   }
//   searchTerm = '';

//   get filteredStudents() {
//     return this.students.filter((student) =>
//       student.name.toLowerCase().includes(this.searchTerm.toLowerCase())
//     );
//   }

//   deleteStudent(studentId: number) {
//     const apiUrl = `http://localhost:3307/api/del/students/${studentId}`;

//     this.http.delete(apiUrl).subscribe(
//       (response: any) => {
//         // Handle success here, e.g., refresh the student list
//         this.getStudents();
//       },
//       (error: any) => {
//         // Handle error here
//         console.error('Error deleting student:', error);
//       }
//     );
//   }

// }

import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog'; // Import MatDialog
import { EditStudentDialogComponent } from '../edit-student-dialog/edit-student-dialog.component';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent implements OnInit {
  students: any[] = []; // Initialize as an empty array

  constructor(
    private studentService: StudentService,
    private http: HttpClient,
    private dialog: MatDialog // Inject MatDialog
  ) {}

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(): void {
    this.studentService.getAllStudents().subscribe((data: any) => {
      this.students = data.students; // Access the 'students' array
    });
  }
  searchTerm = '';

  get filteredStudents() {
    return this.students.filter((student) =>
      student.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  deleteStudent(studentId: number) {
    const apiUrl = `http://localhost:3307/api/del/students/${studentId}`;

    this.http.delete(apiUrl).subscribe(
      (response: any) => {
        // Handle success here, e.g., refresh the student list
        this.getStudents();
      },
      (error: any) => {
        // Handle error here
        console.error('Error deleting student:', error);
      }
    );
  }

  openEditDialog(student: any) {
    const dialogRef = this.dialog.open(EditStudentDialogComponent, {
      width: '400px', // Set the width as per your design
      data: { student }, // Pass the student data to the dialog
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // User clicked Save in the dialog, update the student here
        this.studentService.updateStudent(student.id, result.student).subscribe(
          (response: any) => {
            // Handle success here
            console.log('Student updated successfully:', response);
            // You can update the student list or take any other action as needed
          },
          (error: any) => {
            // Handle error here
            console.error('Error updating student:', error);
          }
        );
      }
    });
  }

}

