import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrippinService } from '../trippin.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss'],
  imports: [CommonModule, ReactiveFormsModule],
})
export class PeopleListComponent {
  
  ngOnInit(): void {
  }
  public nameFilter = new FormControl('');
  
  public input$ = this.nameFilter.valueChanges.pipe(
    debounceTime(1000),
    distinctUntilChanged(),
    // switchMap(name => this.trippin.getPeople(name ?? '')),
    switchMap(name => this.trippin.getPeople('john')),
    tap(obs => {console.log(obs)})
    )
    
    constructor(private trippin: TrippinService) { }
}
// npm i --save-dev @types/tslib