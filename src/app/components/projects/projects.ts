import { Component, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

const ICONS = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

interface Tech {
  name: string;
  icon: string;
}

interface Project {
  nameKey: string;
  descKey: string;
  techs: Tech[];
  image?: string;
  link?: string;
}

interface ProjectSection {
  title: string;
  projects: Project[];
}

interface ProjectGroup {
  label: string;
  emoji: string;
  sections: ProjectSection[];
}

@Component({
  selector: 'app-projects',
  imports: [TranslatePipe],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  groups: ProjectGroup[] = [
    {
      label: 'projects.withAI',
      emoji: '🤖',
      sections: [
        {
          title: 'projects.desktop',
          projects: [],
        },
        {
          title: 'projects.web',
          projects: [],
        },
        {
          title: 'projects.games',
          projects: [],
        },
      ],
    },
    {
      label: 'projects.byHand',
      emoji: '🛠️',
      sections: [
        {
          title: 'projects.desktop',
          projects: [
            {
              nameKey: 'projects.cards.calculadoraName',
              descKey: 'projects.cards.calculadoraDesc',
              link: 'https://github.com/2W2-114324-Carballo-Juarez-Mateo/Calculadora-Cientifica.git',
              techs: [
                { name: 'C#', icon: `${ICONS}/csharp/csharp-original.svg` },
                { name: '.NET', icon: `${ICONS}/dotnetcore/dotnetcore-original.svg` },
              ],
            },
          ],
        },
        {
          title: 'projects.web',
          projects: [],
        },
        {
          title: 'projects.games',
          projects: [],
        },
      ],
    },
  ];

  selectedGroup = signal<number | null>(null);

  get active(): ProjectGroup | null {
    const idx = this.selectedGroup();
    return idx === null ? null : this.groups[idx];
  }

  selectGroup(i: number) {
    this.selectedGroup.set(i);
  }

  back() {
    this.selectedGroup.set(null);
  }
}
