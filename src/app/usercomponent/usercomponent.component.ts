import { Component } from '@angular/core';

@Component({
  selector: 'app-usercomponent',
  templateUrl: './usercomponent.component.html',
  styleUrls: ['./usercomponent.component.css']
})
export class UsercomponentComponent {
name:string;
email:string;
address:string;
usersArray:Array<any> =[];
constructor(){
this.name='',
this.email='',
this.address=''
}
saveUserInfo(){
  this.usersArray.push({name: this.name, email: this.email, address: this.address})
  console.log(this.usersArray)
}
keyUpName($event:any){
  this.name=$event.target.value;
}
keyUpEmail($event:any){
  this.email=$event.target.value;
}
keyUpAddress($event:any){
  this.address=$event.target.value;
}
}
