import { Component } from '@angular/core';
import { ColumnMode, SelectionType } from '../projects/public-api'; // Adjust the path

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'] // Correct property name
})
export class HomeComponent {
  rows = [];
  selected = [];

  ColumnMode = ColumnMode;
  SelectionType = SelectionType;

  constructor() {
    this.fetch((data: any) => {
      this.rows = data;
    });
  }

  //data from file ../data/company.json
  fetch(callback: any) {
    const req = new XMLHttpRequest();
    req.open('GET', 'assets/data/company.json');

    req.onload = () => {
      callback(JSON.parse(req.response));
    };

    req.send();
    console.log('Fetched data:', this.rows); // Adjust the log statement
  }

  onSelect({ selected : selected = [] }) {
  console.log('Select Event', selected, this.selected);

  this.selected.splice(0, this.selected.length);
  this.selected.push(...selected);
}


  onActivate(event: any) {
    console.log('Activate Event', event);
  }

  displayCheck(row: any) {
    return row.name !== 'Ethel Price';
  }
}
