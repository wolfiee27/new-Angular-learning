import { inject, Injectable, signal } from '@angular/core';

import { Place } from './place.model';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { ErrorService } from '../shared/error.service';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private errorService = inject(ErrorService)
  private userPlaces = signal<Place[]>([]);
  loadedUserPlaces = this.userPlaces.asReadonly();

  private httpClient = inject(HttpClient);
  private url = 'http://localhost:3000';

  loadAvailablePlaces() {
    return this.fetchPlaces(`${this.url}/places`,
      'Something went wrong fetching your available places please try again, later')
  }

  loadUserPlaces() {
    return this.fetchPlaces(`${this.url}/user-places`,
      'Something went wrong fetching your favorite places please try again, later')
      .pipe(tap({
        next: (userPlaces) => {
          if (userPlaces)
            this.userPlaces.set(userPlaces);
        }
      }))
  }

  addPlaceToUserPlaces(place: Place) {
    const prevPlaces = this.userPlaces();
    if (prevPlaces.some((p) => p.id != place.id))
      this.userPlaces.set([...prevPlaces, place])

    return this.httpClient.put(`${this.url}/user-places`, {
      placeId: place.id
    }).pipe(
      catchError(error => {
        this.userPlaces.set(prevPlaces);
        this.errorService.showError('Failed to store selected places');
        return throwError(() => new Error('Failed to store selected places'))
      })
    )
  }

  removeUserPlace(place: Place) {
    const prevPlaces = this.userPlaces();
    if (prevPlaces.some((p) => p.id === place.id)) {
      this.userPlaces.set(prevPlaces.filter(p => p.id != place.id))
    }

    return this.httpClient.delete(`${this.url}/user-places/${place.id}`)
      .pipe(catchError(err => {
        this.userPlaces.set(prevPlaces);
        this.errorService.showError('Failed to remove the selected Place.');
        return throwError(() => new Error('Failed to remove the selected Place.'))
      }))
  }

  private fetchPlaces(placesUrl: string, errMessage: string): Observable<Place[] | undefined> {
    return this.httpClient
      .get<{ places: Place[] }>(placesUrl, {
        observe: 'response',
      })
      .pipe(
        map((resData) => resData.body?.places),
        catchError((err) => {
          return throwError(
            () => new Error(err + errMessage)
          );
        })
      )
  }
}
