import { Component } from '@angular/core';

export interface empList {
  employeeId: string;
  name: string;
  gender: string;
  department: string;
  city:string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template:
  // `<h1> Matheswaran </h1>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angulartestapp';
  //empList : [];
  // empList = [{employeeId:'sdf', name:'sdf', gender:'sdf', department:'sfd', city:'sdfdsf'},
  // {employeeId:'sdf', name:'sdf', gender:'sdf', department:'sfd', city:'sdfdsf'}];
}
