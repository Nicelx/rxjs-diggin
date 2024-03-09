import { AfterViewInit, Component, Input } from "@angular/core";
import { Observable } from "rxjs";
import { Trip } from "../models/TrippinModel";
import { TrippinService } from "../trippin.service";
import { CommonModule } from "@angular/common";

@Component({
	selector: "app-trip-list",
	standalone: true,
	imports: [CommonModule],
	templateUrl: "./trip-list.component.html",
	styleUrl: "./trip-list.component.scss",
})
export class TripListComponent implements AfterViewInit {
	// userName comes from params
	@Input() public userName?: string;
	public data$?: Observable<{ value: Trip[] }>;

	constructor(private trippin: TrippinService) {}

	ngAfterViewInit(): void {
		if (this.userName) {
			this.data$ = this.trippin.getTrips(this.userName);
		}
	}
}
