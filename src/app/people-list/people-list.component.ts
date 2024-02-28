import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss'],
  imports: [CommonModule, ReactiveFormsModule],
})
export class PeopleListComponent implements OnInit {
  constructor() { }
  
  ngOnInit(): void {
  }
  public nameFilter = new FormControl('');

}
