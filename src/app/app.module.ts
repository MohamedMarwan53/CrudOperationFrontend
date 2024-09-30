import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StudentComponent } from './AddStudent/student.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { EditstudentComponent } from './EditEmployee/editstudent.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { StudentdetailsComponent } from './StudentDetails/studentdetails.component';
import { EmployeebynameComponent } from './StudentbyId/employeebyname.component';




@NgModule({
  declarations: [AppComponent,StudentComponent, EditstudentComponent,StudentdetailsComponent, EmployeebynameComponent],
  imports: [BrowserModule, FormsModule,ReactiveFormsModule,AppRoutingModule,CommonModule,],
  providers: [provideHttpClient(withFetch())],
  bootstrap: [AppComponent],
})
export class AppModule {}
