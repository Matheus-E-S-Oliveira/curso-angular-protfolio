import { Component, signal } from '@angular/core';
import { IExperience } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experieneces',
  standalone: true,
  imports: [],
  templateUrl: './experieneces.component.html',
  styleUrl: './experieneces.component.scss'
})
export class ExperienecesComponent {
  public arrayExperiences = signal<IExperience[]>([
    {
      summary: {
        strong: "Estagiario",
        p: "Rerum | Ago 2024 - Present",
      },
      text: "FAzendo estagio desde 5 de agosto de 2025",
    },
  ]);
}
