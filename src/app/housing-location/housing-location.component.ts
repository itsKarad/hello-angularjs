import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';


@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="listing">
      <img class="listing-photo" [src]="housingLocationInput.photo" alt="Exterior photo of {{housingLocationInput.name}}">
      <h2 class="listing-heading">{{ housingLocationInput.name }}</h2>
      <p class="listing-location">{{ housingLocationInput.city}}, {{housingLocationInput.state }}</p>
    </section>
  `,
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {
  @Input() housingLocationInput!: HousingLocation;
}
