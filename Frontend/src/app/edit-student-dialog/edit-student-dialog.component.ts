import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-edit-student-dialog',
  templateUrl: './edit-student-dialog.component.html',
  styleUrls: ['./edit-student-dialog.component.css'],
})
export class EditStudentDialogComponent {
  editedStudent: any;

  constructor(
    public dialogRef: MatDialogRef<EditStudentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private studentService: StudentService
  ) {
    this.editedStudent = { ...data.student };
  }

  onSubmit() {
    console.log('Edited Student Data:', this.editedStudent); // Debugging: Check if edited data is correct
    this.studentService.updateStudent(this.data.student.id, this.editedStudent).subscribe(
      (response) => {
        console.log('Student updated successfully:', response); // Debugging: Check success response
        this.dialogRef.close('updated');
      },
      (error) => {
        console.error('Error updating student:', error); // Debugging: Check error response
      }
    );
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
