import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import BrowserAnimationsModule

// Import Angular Material modules
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { EditStudentDialogComponent } from './edit-student-dialog/edit-student-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { GetStudentComponent } from './get-student/get-student.component';

@NgModule({
  declarations: [AppComponent, CreateStudentComponent, StudentListComponent, EditStudentDialogComponent, GetStudentComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // Add BrowserAnimationsModule
    MatCardModule, // Add MatCardModule
    MatFormFieldModule, // Add MatFormFieldModule
    MatInputModule, // Add MatInputModule
    MatButtonModule, // Add MatButtonModule
    AppRoutingModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
