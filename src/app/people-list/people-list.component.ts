import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrippinService } from '../trippin.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, startWith, switchMap, tap } from 'rxjs';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss'],
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
})
export class PeopleListComponent {
  
  ngOnInit(): void {
  }
  public nameFilter = new FormControl('');
  
  public input$ = this.nameFilter.valueChanges.pipe(
    startWith(''),
    debounceTime(1000),
    distinctUntilChanged(),
    switchMap(name => this.trippin.getPeople(name ?? '')),
    )
    
    constructor(private trippin: TrippinService) { }
}