import { Component, OnInit } from '@angular/core';
import { Student } from '../StudentData/student';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../Student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent implements OnInit {

  students: Student[] = [];


  constructor(private studentService: StudentService,
    private formBuilder: FormBuilder,
    private route: Router,


  ) {


  }
  ngOnInit(): void {
    this.loadstudent();
  }

  employee(id: number) {
    this.route.navigate(['/view', id])
  }
  loadstudent() {
    this.studentService.getStudents().subscribe((students) => {
      this.students = students
    },
      (error) => console.log('error'))
  }
  editStudent(id: number): void {
    this.route.navigate(['/search', id])

  }

  deleteStudent(rollno: number): void {
    this.studentService.deleteStudent(rollno).subscribe(() => {
      this.loadstudent();
    }

    )
  }
}

