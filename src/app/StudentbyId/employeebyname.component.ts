import { Component, OnInit } from '@angular/core';
import { Student } from '../StudentData/student';
import { StudentService } from '../Student.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employeebyname',
  templateUrl: './employeebyname.component.html',
  styleUrl: './employeebyname.component.css'
})
export class EmployeebynameComponent implements OnInit {
  student!: Student;
  studentId!: number;

  constructor(private studentservice: StudentService,
    private activate: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.activate.params.subscribe((param) => {
      this.studentId = +param['id'];
    });
    this.loadstudent();

  }



  loadstudent() {
    this.studentservice.getStudentByid(this.studentId).subscribe((student) => {
      this.student = student, console.log(this.student);
    })
  }
}