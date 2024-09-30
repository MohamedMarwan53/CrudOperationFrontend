import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditstudentComponent } from './EditEmployee/editstudent.component';
import { StudentComponent } from './AddStudent/student.component';
import { StudentdetailsComponent } from './StudentDetails/studentdetails.component';
import { EmployeebynameComponent } from './StudentbyId/employeebyname.component';


const routes: Routes = [{path:'search/:id', component:EditstudentComponent},
                        { path: 'student', component: StudentComponent },
                        { path: 'edit', component: StudentdetailsComponent },
                        { path: 'view/:id', component: EmployeebynameComponent }
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
