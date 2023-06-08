import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CrudService} from '../crud.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-update-restro',
  templateUrl: './update-restro.component.html',
  styleUrls: ['./update-restro.component.scss']
})
export class UpdateRestroComponent implements OnInit {

  updateRestaurant = new FormGroup({
    name: new FormControl(''),
    city: new FormControl(''),
    website: new FormControl('')
  });

  incomingId: number;
  showEditAlert: boolean = false;
  restaurantData: any = [];

  constructor(private service: CrudService, private activatedR: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.incomingId = this.activatedR.snapshot.params.id;
    console.log(this.incomingId);
    if (this.incomingId && !isNaN(Number(this.incomingId))) {
      this.fetchCurrentData();
    } else {
      console.log('Invalid');
      alert(`Restaurant not found. Select from the available restaurants.`);
      // this.router.navigateByUrl('/crud/list');
      this.updateRestaurant.disable();
    }
  }

  // tslint:disable-next-line:typedef
  fetchCurrentData() {
    this.service.getThatData(this.incomingId).subscribe(
      (res: any) => {
        // console.log(res);
        this.restaurantData = res;

        // for patchValue -> some fields can also be ignored, not strict checking for structure do not check for all properties
        this.updateRestaurant.patchValue({
          name: res.name,
          website: res.website,
          city: res.city
        });

        // this.updateRestaurant.setValue({ // will result an error => Error: Must supply a value for form control with name: 'website'
        //   name: res.name,
        //   city: res.city
        // });

        // can directly assign the data object to setValue -> but setValue checks for all controls (structure should be same / checks for all properties)
        // this.updateRestaurant.setValue(res); // will still result an error if it even contains an extra property
      }
    );
  }

  // tslint:disable-next-line:typedef
  submitData() {
    // if (this.updateRestaurant.status.toLowerCase() === 'disabled') {
    //   return;
    // }
    if (!this.updateRestaurant.valid) { return; }
    this.service.updateRestaurant(this.incomingId, this.updateRestaurant.value).subscribe(
      (res: any) => {
        console.log(res);
        this.showEditAlert = true;
      }
    );
  }

  // tslint:disable-next-line:typedef
  closeAlert() {
    this.showEditAlert = false;
  }

  checkDataChange() {
    return this.restaurantData.name === this.updateRestaurant.value.name &&
      this.restaurantData.city === this.updateRestaurant.value.city &&
      this.restaurantData.website === this.updateRestaurant.value.website;
  }

}
