import {
  Component,
  inject,
  OnDestroy,
  OnInit,
  signal,
  DestroyRef,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Place } from '../place.model';
import { PlacesComponent } from '../places.component';
import { PlacesContainerComponent } from '../places-container/places-container.component';
import { catchError, map, Observable, subscribeOn, throwError } from 'rxjs';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-available-places',
  standalone: true,
  templateUrl: './available-places.component.html',
  styleUrl: './available-places.component.css',
  imports: [PlacesComponent, PlacesContainerComponent],
})
export class AvailablePlacesComponent implements OnInit {
  placesService = inject(PlacesService);
  places = signal<Place[] | undefined>(undefined);
  isFetching = signal<Boolean>(false);
  error = signal<string>('');
  private placeshttpReq: Observable<Object> | undefined;
  private httpClient = inject(HttpClient);
  private destroyRef = inject(DestroyRef);
  private url = 'http://localhost:3000';
  ngOnInit(): void {
    this.isFetching.set(true);
    const subscription = this.placesService.loadAvailablePlaces()
      .subscribe({
        next: (response) => {
          this.places.set(response);
        },
        complete: () => {
          this.isFetching.set(false);
        },
        error: (err: Error) => {
          this.error.set(err.message);
        },
      });

    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }

  //put req
  onSelectPlace(selectedPlace: Place): void {
    const subscription = this.placesService.addPlaceToUserPlaces(selectedPlace)
      .subscribe({
        next: (resData) => console.log(resData),
      });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    })
  }
}
