import { inject, Injectable, signal } from '@angular/core';

import { Place } from './place.model';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
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
    this.userPlaces.update(prePlaces => [...prePlaces, place])
    return this.httpClient.put(`${this.url}/user-places`, {
      placeId: place.id
    })
  }

  removeUserPlace(place: Place) { }

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
