import { Component } from '@angular/core';
import { UserdataService } from '../userdata.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  providers:[UserdataService]
})
export class RegisterComponent {
  public users : any;
  constructor(public service :UserdataService) {
  }
  ngOnInit(): void {
    this.service.getdata().subscribe(data =>{
      this.users = data;
      console.log(data);
    } );
  }




}
