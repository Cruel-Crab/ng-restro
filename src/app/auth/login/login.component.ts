import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUser= new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  constructor(private service: AuthService) { }

  ngOnInit(): void {
  }

  submitData(): void {
    this.service.loginUser(this.loginUser.value).subscribe(
      (res: any) => {
        console.log(res);
      }
    );
  }

}
