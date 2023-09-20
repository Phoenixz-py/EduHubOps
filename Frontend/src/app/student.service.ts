// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class StudentService {
//   private baseUrl = 'http://localhost:3307/api/students'; // Replace with your API endpoint

//   constructor(private http: HttpClient) {}

//   createStudent(studentData: any): Observable<any> {
//     return this.http.post(this.baseUrl, studentData);
//   }
// }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private baseUrl = 'http://localhost:3307/api/students'; // Default API endpoint for creating students
  private allStudentsUrl = 'http://localhost:3307/api/Allstudents'; // New API endpoint for fetching all students

  constructor(private http: HttpClient) {}

  createStudent(studentData: any): Observable<any> {
    return this.http.post(this.baseUrl, studentData);
  }

  getAllStudents(): Observable<any[]> {
    return this.http.get<any[]>(this.allStudentsUrl);
  }

  updateStudent(studentId: number, updatedData: any): Observable<any> {
    const apiUrl = `${this.baseUrl}/${studentId}`;
    return this.http.put(apiUrl, updatedData);
  }

  getStudentById(studentId: number): Observable<any> {
    const apiUrl = `${this.baseUrl}/${studentId}`;
    return this.http.get(apiUrl);
  }


}
