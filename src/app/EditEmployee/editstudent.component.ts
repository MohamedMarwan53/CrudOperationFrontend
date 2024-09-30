import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../Student.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student } from '../StudentData/student';
import { Block } from '@angular/compiler';
import { start } from 'repl';

@Component({
  selector: 'app-editstudent',
  templateUrl: './editstudent.component.html',
  styleUrls: ['./editstudent.component.css']
})
export class EditstudentComponent implements OnInit {
  // refreshPage() {
  //   window.location.reload();
  // }
  students: Student[] = [];
  StudentId!: number;
  updateform!: FormGroup;
  student!: Student;
  successMessage!:string; 

  constructor(
    private router: ActivatedRoute,
    private studentService: StudentService,
    private builder: FormBuilder,
    private route: Router,
    private element:ElementRef,
    private render:Renderer2

  ) {
    this.router.params.subscribe((param) => {
      this.StudentId = +param['id'];
    });
  }

  ngOnInit(): void {

    this.updateform = this.builder.group({
      id: [''],
      rollno: ['', Validators.required],
      name: ['', Validators.required],
      education_Qualification: ['', Validators.required],
      age: ['', Validators.required]
    });
    
    this.studentService.getStudentByid(this.StudentId).subscribe((data) => {
      this.student = data;
      this.updateform.patchValue(this.student);
      
    });
  }

  updateStudent(): void {
    if (this.updateform.valid) {
      const updatedStudent = this.updateform.value;
      

      this.studentService.updateStudent(updatedStudent).subscribe(() => {
        this.route.navigate(['edit']);
        
      });
      
    
    }
  }
loadstudent(){
  this.studentService.getStudents().subscribe((students)=> {
    this.students=students
  })
    
  }

  cancelEdit(): void {
    this.updateform.reset();
  }
}
