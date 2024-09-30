import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { StudentService } from '../Student.service';
import { Student } from '../StudentData/student';
import { Router } from '@angular/router';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {

  students: Student[] = [];
  selectedStudent: Student | null = null;
  studentForm1: FormGroup;


  studentModel!: Student;

  constructor(private studentService: StudentService,
    private formBuilder: FormBuilder,
    private route: Router,
  ) {

    this.studentForm1 = this.formBuilder.group({

      rollno: ['', Validators.required],
      name: ['', Validators.required],
      education_Qualification: ['', Validators.required],
      age: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    this.loadstudent();
  }

  addStudent() {
    const student = this.studentForm1.value;
    console.log(student);

    if (this.studentForm1.valid) {
      this.studentService.addStudent(student).subscribe(() => {
        this.studentForm1.reset(), this.loadstudent(), this.route.navigate(['/edit'])

      });
    }
  }

  loadstudent() {
    this.studentService.getStudents().subscribe((students) => {
      this.students = students
    })
  }

  editStudent(id: number): void {
    this.route.navigate(['/search', id])
  }

  deleteStudent(rollno: number): void {
    this.studentService.deleteStudent(rollno).subscribe(() => {
      this.loadstudent();
    });
  }
}


