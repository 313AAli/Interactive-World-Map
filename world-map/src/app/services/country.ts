import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CountryService {
  constructor(private http: HttpClient) {}

  getCountryInfo(code: string) {
    return this.http.get<any[]>(`https://api.worldbank.org/v2/country/${code}?format=json`).pipe(
      map(res => {
        const c = res[1][0];
        return {
          name: c.name,
          capital: c.capitalCity,
          region: c.region.value,
          incomeLevel: c.incomeLevel.value,
          longitude: c.longitude,
          latitude: c.latitude,
          iso2Code: c.iso2Code
        };
      })
    );
  }
}