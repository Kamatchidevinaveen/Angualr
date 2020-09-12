import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  name_1: string;
  position_1: number;
  weight_1: number;
  symbol_1: string;
  name_2: string;
  position_2: number;
  weight_2: number;
  symbol_2: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: 'Hydrogen Hydrogen Hydrogen',
    weight: 1.0079,
    symbol: 'H',
    position_1: 1,
    name_1: 'Hydrogen',
    weight_1: 1.0079,
    symbol_1: 'H',
    position_2: 1,
    name_2: 'Hydrogen',
    weight_2: 1.0079,
    symbol_2: 'H',
  },
  {
    position: 2,
    name: 'Helium Hydrogen Hydrogen',
    weight: 4.0026,
    symbol: 'He',
    position_1: 1,
    name_1: 'Hydrogen',
    weight_1: 1.0079,
    symbol_1: 'H',
    position_2: 1,
    name_2: 'Hydrogen',
    weight_2: 1.0079,
    symbol_2: 'H',
  },
  {
    position: 3,
    name: 'Lithium Hydrogen Hydrogen Hydrogen Hydrogen Hydrogen Hydrogen',
    weight: 6.941,
    symbol: 'Li Hydrogen Hydrogen Hydrogen Hydrogen',
    position_1: 1,
    name_1: 'Hydrogen Hydrogen Hydrogen Hydrogen',
    weight_1: 1.0079,
    symbol_1: 'H Hydrogen Hydrogen Hydrogen',
    position_2: 1,
    name_2: 'Hydrogen Hydrogen Hydrogen Hydrogen Hydrogen',
    weight_2: 1.0079,
    symbol_2: 'H HydrogenHydrogen Hydrogen Hydrogen Hydrogen',
  },
  {
    position: 4,
    name: 'Beryllium',
    weight: 9.0122,
    symbol: 'Be',
    position_1: 1,
    name_1: 'Hydrogen',
    weight_1: 1.0079,
    symbol_1: 'H',
    position_2: 1,
    name_2: 'Hydrogen',
    weight_2: 1.0079,
    symbol_2: 'H',
  },
  {
    position: 5,
    name: 'Boron',
    weight: 10.811,
    symbol: 'B',
    position_1: 1,
    name_1: 'Hydrogen',
    weight_1: 1.0079,
    symbol_1: 'H',
    position_2: 1,
    name_2: 'Hydrogen',
    weight_2: 1.0079,
    symbol_2: 'H',
  },
  {
    position: 6,
    name: 'Carbon',
    weight: 12.0107,
    symbol: 'C',
    position_1: 1,
    name_1: 'Hydrogen',
    weight_1: 1.0079,
    symbol_1: 'H',
    position_2: 1,
    name_2: 'Hydrogen',
    weight_2: 1.0079,
    symbol_2: 'H',
  },
  {
    position: 7,
    name: 'Nitrogen',
    weight: 14.0067,
    symbol: 'N',
    position_1: 1,
    name_1: 'Hydrogen',
    weight_1: 1.0079,
    symbol_1: 'H',
    position_2: 1,
    name_2: 'Hydrogen',
    weight_2: 1.0079,
    symbol_2: 'H',
  },
  {
    position: 8,
    name: 'Oxygen',
    weight: 15.9994,
    symbol: 'O',
    position_1: 1,
    name_1: 'Hydrogen',
    weight_1: 1.0079,
    symbol_1: 'H',
    position_2: 1,
    name_2: 'Hydrogen',
    weight_2: 1.0079,
    symbol_2: 'H',
  },
  {
    position: 9,
    name: 'Fluorine',
    weight: 18.9984,
    symbol: 'F',
    position_1: 1,
    name_1: 'Hydrogen',
    weight_1: 1.0079,
    symbol_1: 'H',
    position_2: 1,
    name_2: 'Hydrogen',
    weight_2: 1.0079,
    symbol_2: 'H',
  },
  {
    position: 10,
    name: 'Neon',
    weight: 20.1797,
    symbol: 'Ne',
    position_1: 1,
    name_1: 'Hydrogen',
    weight_1: 1.0079,
    symbol_1: 'H',
    position_2: 1,
    name_2: 'Hydrogen',
    weight_2: 1.0079,
    symbol_2: 'H',
  },
  {
    position: 11,
    name: 'Sodium',
    weight: 22.9897,
    symbol: 'Na',
    position_1: 1,
    name_1: 'Hydrogen',
    weight_1: 1.0079,
    symbol_1: 'H',
    position_2: 1,
    name_2: 'Hydrogen',
    weight_2: 1.0079,
    symbol_2: 'H',
  },
  {
    position: 12,
    name: 'Magnesium',
    weight: 24.305,
    symbol: 'Mg',
    position_1: 1,
    name_1: 'Hydrogen',
    weight_1: 1.0079,
    symbol_1: 'H',
    position_2: 1,
    name_2: 'Hydrogen',
    weight_2: 1.0079,
    symbol_2: 'H',
  },
  {
    position: 13,
    name: 'Aluminum',
    weight: 26.9815,
    symbol: 'Al',
    position_1: 1,
    name_1: 'Hydrogen',
    weight_1: 1.0079,
    symbol_1: 'H',
    position_2: 1,
    name_2: 'Hydrogen',
    weight_2: 1.0079,
    symbol_2: 'H',
  },
  {
    position: 14,
    name: 'Silicon',
    weight: 28.0855,
    symbol: 'Si',
    position_1: 1,
    name_1: 'Hydrogen',
    weight_1: 1.0079,
    symbol_1: 'H',
    position_2: 1,
    name_2: 'Hydrogen',
    weight_2: 1.0079,
    symbol_2: 'H',
  },
  {
    position: 15,
    name: 'Phosphorus',
    weight: 30.9738,
    symbol: 'P',
    position_1: 1,
    name_1: 'Hydrogen',
    weight_1: 1.0079,
    symbol_1: 'H',
    position_2: 1,
    name_2: 'Hydrogen',
    weight_2: 1.0079,
    symbol_2: 'H',
  },
  {
    position: 16,
    name: 'Sulfur',
    weight: 32.065,
    symbol: 'S',
    position_1: 1,
    name_1: 'Hydrogen',
    weight_1: 1.0079,
    symbol_1: 'H',
    position_2: 1,
    name_2: 'Hydrogen',
    weight_2: 1.0079,
    symbol_2: 'H',
  },
  {
    position: 17,
    name: 'Chlorine',
    weight: 35.453,
    symbol: 'Cl',
    position_1: 1,
    name_1: 'Hydrogen',
    weight_1: 1.0079,
    symbol_1: 'H',
    position_2: 1,
    name_2: 'Hydrogen',
    weight_2: 1.0079,
    symbol_2: 'H',
  },
  {
    position: 18,
    name: 'Argon',
    weight: 39.948,
    symbol: 'Ar',
    position_1: 1,
    name_1: 'Hydrogen',
    weight_1: 1.0079,
    symbol_1: 'H',
    position_2: 1,
    name_2: 'Hydrogen',
    weight_2: 1.0079,
    symbol_2: 'H',
  },
  {
    position: 19,
    name: 'Potassium',
    weight: 39.0983,
    symbol: 'K',
    position_1: 1,
    name_1: 'Hydrogen',
    weight_1: 1.0079,
    symbol_1: 'H',
    position_2: 1,
    name_2: 'Hydrogen',
    weight_2: 1.0079,
    symbol_2: 'H',
  },
  {
    position: 20,
    name: 'Calcium',
    weight: 40.078,
    symbol: 'Ca',
    position_1: 1,
    name_1: 'Hydrogen',
    weight_1: 1.0079,
    symbol_1: 'H',
    position_2: 1,
    name_2: 'Hydrogen',
    weight_2: 1.0079,
    symbol_2: 'H',
  },
];

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent implements OnInit {
  /** variable declarations */

  public displayedColumns: string[] = [
    'position',
    'name',
    'weight',
    'symbol',
    'position_1',
    'name_1',
    'weight_1',
    'symbol_1',
    'position_2',
    'name_2',
    'weight_2',
    'symbol_2',
    'symbol_3',
    'symbol_4',
  ];
  public dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  /** constructor class */
  constructor() {}

  /** private methods */

  /** public methods */

  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
