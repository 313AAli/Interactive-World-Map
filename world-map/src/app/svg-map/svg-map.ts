import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-svg-map',
  templateUrl: './svg-map.component.html',
  styleUrls: ['./svg-map.component.css']
})
export class SvgMapComponent {
  @Output() countrySelected = new EventEmitter<string>();

  highlight(event: any) {
    event.target.style.fill = '#5EDFFF';
  }
  unhighlight(event: any) {
    event.target.style.fill = '';
  }
  selectCountry(code: string) {
    this.countrySelected.emit(code);
  }
}
