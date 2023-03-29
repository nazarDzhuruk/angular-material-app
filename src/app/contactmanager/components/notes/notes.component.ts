import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Note } from '../../models/note';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit, AfterViewInit {

  @Input() 
  public notes: Note[] | any;

  @ViewChild(MatPaginator)
  protected paginator: MatPaginator | any;

  @ViewChild(MatSort)
  protected sort: MatSort | any;

  protected dataSource: MatTableDataSource<any[]> | any;
  protected displayedColumns: string[] = ['id', 'title', 'date'];

  constructor() { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Note>(this.notes);
  }

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
