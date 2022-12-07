import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  empcode=""
  name=""
  companyname=""
  designation=""
  phone=""
  username=""
  password=""
  salary=""

  constructor(private api:ApiService){}
  readValues=()=>
  {
    let data:any={"empcode":this.empcode,"name":this.name,"companyname":this.companyname,"designation":this.designation,"phone":this.phone,
  "username":this.username,"password":this.password,"salary":this.salary}
  console.log(data)
  this.api.addEmployee(data).subscribe(
    (response:any)=>{
      console.log(response)
      alert("Employee added");
      this.empcode=""
      this.name=""
      this.companyname=""
      this.designation=""
      this.phone=""
      this.username=""
      this.password=""
      this.salary=""

    }
  )
  }








}
