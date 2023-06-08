import { Component, OnInit } from '@angular/core';
import {CrudService} from '../crud.service';

@Component({
  selector: 'app-list-restro',
  templateUrl: './list-restro.component.html',
  styleUrls: ['./list-restro.component.scss']
})
export class ListRestroComponent implements OnInit {
  collection: {}[] = [];
  showDeleteAlert: boolean = false;

  constructor(private service: CrudService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.service.getList().subscribe(
      (res: any) => {
        console.log(res);
        this.collection = res;
      }
    );
  }

  deleteItem(id: number): void {
    this.service.deleteRestaurant(id).subscribe(
      (res: any) => {
        console.log(res);
        this.showDeleteAlert = true;
        this.fetchData();
      }
    );
  }

  closeAlert(): void {
    this.showDeleteAlert = false;
  }
}
