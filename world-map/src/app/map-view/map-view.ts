import { Component } from '@angular/core';
import { CountryService } from '../services/country.service';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent {
  country: any;

  constructor(private countryService: CountryService) {}

  onCountrySelected(code: string) {
    this.countryService.getCountryInfo(code).subscribe(data => {
      this.country = data;
    });
  }
}