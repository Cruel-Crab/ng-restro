import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  passwordPattern: string = `^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]*$`; // At least 1 uppercase, 1 lowercase, 1 number

  registerUser = new FormGroup({
    username: new FormControl('', [Validators.required]),
    useremail: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern(this.passwordPattern)]),
  });

  constructor(private service: AuthService) { }

  ngOnInit(): void {
  }

  submitData(): void  {
    if (!this.registerUser.valid) { return; }
    this.service.registerUser(this.registerUser.value).subscribe(
      (res: any) => {
        console.log(res);
      }
    );
  }

}
