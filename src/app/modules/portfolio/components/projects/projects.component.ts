import { Component, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
public arrayProjects = signal<IProjects[]>([
  {
    src: 'assets/img/projects/vfull.png',
    alt: 'projeto vida FullStack',
    title: "Vida Fullstack",
    width: '100px',
    height: '51px',
    descrptiob: "",
    links: [
      {
        name: 'Conheça o Blog',
        href: 'https://github.com/mtsgo13'
      },
    ],
  },
]);
}
