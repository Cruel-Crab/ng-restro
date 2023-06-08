import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-add-restro',
  templateUrl: './add-restro.component.html',
  styleUrls: ['./add-restro.component.scss']
})
export class AddRestroComponent implements OnInit {

  addRestaurant = new FormGroup({
    name: new FormControl('', [Validators.required]),
    city: new FormControl('', Validators.required),
    website: new FormControl('', Validators.required)
  });

  showAlert: boolean = false;

  constructor(private service: CrudService) { }

  ngOnInit(): void {
  }

  submitData(): void {
    this.service.saveRestaurant(this.addRestaurant.value).subscribe(
      (res: any) => {
        console.log(res);
        this.showAlert = true;
        this.addRestaurant.reset({});
      }
    );
  }

  closeAlert(): void {
    this.showAlert = false;
  }
}
