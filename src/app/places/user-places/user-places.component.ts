import { Component, DestroyRef, inject, signal } from '@angular/core';

import { PlacesContainerComponent } from '../places-container/places-container.component';
import { PlacesComponent } from '../places.component';
import { HttpClient } from '@angular/common/http';
import { Place } from '../place.model';
import { catchError, map, throwError } from 'rxjs';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-user-places',
  standalone: true,
  templateUrl: './user-places.component.html',
  styleUrl: './user-places.component.css',
  imports: [PlacesContainerComponent, PlacesComponent],
})
export class UserPlacesComponent {
  isFetching = signal<Boolean>(false);
  error = signal<string>('');
  private placesService = inject(PlacesService);
  places = this.placesService.loadedUserPlaces;
  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.isFetching.set(true);
    const subscription = this.placesService.loadUserPlaces()
      .subscribe({
        complete: () => {
          this.isFetching.set(false);
        },
        error: (err: Error) => {
          this.error.set(err.message);
        },
      });

    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }
}
