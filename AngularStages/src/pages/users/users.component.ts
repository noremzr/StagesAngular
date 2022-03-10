import { Component, OnInit } from '@angular/core';
import {MatFormField} from '@angular/material/form-field';
import { User } from 'src/models/user';
import { UserService } from 'src/services/userService';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.loadUsers()
  }

  loadUsers(){
    this.userService.getUsers().subscribe(users=>{
      this.dataSource=users;
    })
  }

  formName:string="";
  formUser:string="";
  formEmail:string="";
  formPassword:string="";

  public hide:boolean=true;
  displayedColumns: string[] = ['user', 'name', 'email','delete'];
  dataSource:User[] = [];

  public addUser(){
    let user:User = new User(this.formUser,this.formEmail,this.formPassword,this.formName)
    let newDataSource:User[]=[];
    this.dataSource.forEach(x=>newDataSource.push(x));
    newDataSource.push(user);
    this.dataSource=newDataSource;
  }

  public removeUser(user:User){
    this.dataSource.forEach((element,index)=>{
      if(element.userName==user.userName){
        this.dataSource.splice(index,1);
      }
   });
    let newDataSource:User[]=[];
    this.dataSource.forEach(x=>newDataSource.push(x));
   this.dataSource=newDataSource;
  }

  public salvar(){
    this.userService.saveUsers(this.dataSource).subscribe(x=>alert('Usuários salvos com sucesso!'));
  }
}
