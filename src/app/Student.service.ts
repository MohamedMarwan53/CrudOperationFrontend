import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable ,tap} from 'rxjs';
import { Student } from './StudentData/student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private baseUrl = 'http://localhost:8080/user';

  constructor(private http: HttpClient) {}

  
  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.baseUrl}`);
  }

 
  getStudentByid(id: number): Observable<Student> {
    return this.http.get<Student>(`${this.baseUrl}/${id}`);
  }

  
  addStudent(student: Student): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`, student);
  }

 
  updateStudent(student: Student): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${student.rollno}`, student).pipe(
      tap((response)=> response.message)
    );
  }

 
  deleteStudent(rollno: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${rollno}`);
  }
}
