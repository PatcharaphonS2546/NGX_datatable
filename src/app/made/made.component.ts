import { Component, OnInit, ViewChild } from '@angular/core';
import { ColumnMode, DatatableComponent, SelectionType,  } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-made',
  templateUrl: './made.component.html',
  styleUrl: './made.component.scss'
})
export class MadeComponent implements OnInit {
  @ViewChild(DatatableComponent) table!: DatatableComponent;
  ColumnMode = ColumnMode;
  SelectionType = SelectionType;
  loadingIndicator !: boolean;
  temp: any[] = [];
  rows: any[] = [];

  searchValue: string = '';

  constructor() {}

  ngOnInit(): void {
    this.loadingIndicator = true;
    this.temp = [
      { id: 1, name: 'Austin', gender: 'Male', company: 'Swimlane'},
      { id: 2, name: 'Dany', gender: 'Female', company: 'KFC'},
      { id: 3, name: 'Molly', gender: 'Male', company: 'Burger King'},
      { id: 4, name: 'Austin', gender: 'Male', company: 'Swimlane'},
      { id: 5, name: 'Dany', gender: 'Female', company: 'KFC'},
      { id: 6, name: 'Molly', gender: 'Male', company: 'Burger King'},
      { id: 7, name: 'Austin', gender: 'Male', company: 'Swimlane'},
      { id: 8, name: 'Dany', gender: 'Female', company: 'KFC'},
      { id: 9, name: 'Molly', gender: 'Male', company: 'Burger King'}
    ];
    this.rows = [...this.temp];
    this.loadingIndicator = false;
  }

   edit(row: any){
    console.log(row);
   }

   deleteItem(row: any) {

   }

   updateFilter(event: any){
    const val = event.target.value.toLowerCase();


    // filter our data
    const temp = this.temp.filter((d) =>{
      return d.name.toLowerCase().indexOf(val) !== -1 ||
         d.gender.toLowerCase().indexOf(val) !== -1 ||
         d.company.toLowerCase().indexOf(val) !== -1 ||
         d.id.toString().indexOf(val) !== -1 ||
         !val; // Include all items if the search value is empty
    });


    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
   }

   onSelect({ selected }: { selected: any[] }) {
    console.log('Select Event', selected);

    // Update the 'checked' property in the original data
    this.temp.forEach(item => {
      const selectedMatch = selected.find(selectedItem => selectedItem.id === item.id);
        if (selectedMatch) {
          item.checked = true;
            } else {
              item.checked = false;
            }
          });
    }

}
