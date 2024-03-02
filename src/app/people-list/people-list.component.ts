import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs';
import { TrippinService } from '../trippin.service';

@Component({
  standalone: true,
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss'],
  imports: [CommonModule, ReactiveFormsModule],
})
export class PeopleListComponent implements OnInit {
  constructor(private trippin: TrippinService) { }
  
  ngOnInit(): void {
  }
  public nameFilter = new FormControl('');

  public input$ = this.nameFilter.valueChanges.pipe(
    debounceTime(1000),
    distinctUntilChanged(),
    // switchMap(name => this.trippin.getPeople(name ?? '')),
  )

}
