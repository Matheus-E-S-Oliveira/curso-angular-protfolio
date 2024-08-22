import { Component } from '@angular/core';

//Components
import { HeaderComponent } from '../../components/header/header.component';
import { KnowledgeComponent } from '../../components/knowledge/knowledge.component';
import { ExperienecesComponent } from '../../components/experieneces/experieneces.component';
import { ProjectsComponent } from '../../components/projects/projects.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    KnowledgeComponent,
    ExperienecesComponent,
    ProjectsComponent
  
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
