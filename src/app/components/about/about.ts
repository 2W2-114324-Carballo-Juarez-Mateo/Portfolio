import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  techs: string[] = [
    'C#', 'JavaScript', 'HTML', 'CSS', 'SQL',
    'ASP.NET', 'Entity Framework', 'ADO.NET',
    'Angular', 'Spring Boot', 'Unity',
    'Docker', 'Redis', 'Neo4j', 'MongoDB', 'Cassandra',
  ];
}
