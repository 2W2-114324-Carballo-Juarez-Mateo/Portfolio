import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

const ICONS = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

interface Skill {
  name: string;
  icon: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  imports: [TranslatePipe],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  categories: SkillCategory[] = [
    {
      title: 'skills.languages',
      skills: [
        { name: 'C#', icon: `${ICONS}/csharp/csharp-original.svg` },
        { name: 'Java', icon: `${ICONS}/java/java-original.svg` },
        { name: 'JavaScript', icon: `${ICONS}/javascript/javascript-original.svg` },
        { name: 'SQL', icon: `${ICONS}/microsoftsqlserver/microsoftsqlserver-plain.svg` },
        { name: 'HTML', icon: `${ICONS}/html5/html5-original.svg` },
        { name: 'CSS', icon: `${ICONS}/css3/css3-original.svg` },
      ],
    },
    {
      title: 'skills.frameworks',
      skills: [
        { name: 'Angular', icon: `${ICONS}/angular/angular-original.svg` },
        { name: 'ASP.NET', icon: `${ICONS}/dotnetcore/dotnetcore-original.svg` },
        { name: 'Spring Boot', icon: `${ICONS}/spring/spring-original.svg` },
        { name: 'Node.js', icon: `${ICONS}/nodejs/nodejs-original.svg` },
        { name: 'Entity Framework', icon: `${ICONS}/dotnetcore/dotnetcore-original.svg` },
        { name: 'ADO.NET', icon: `${ICONS}/dotnetcore/dotnetcore-original.svg` },
      ],
    },
    {
      title: 'skills.databases',
      skills: [
        { name: 'Redis', icon: `${ICONS}/redis/redis-original.svg` },
        { name: 'Neo4j', icon: `${ICONS}/neo4j/neo4j-original.svg` },
        { name: 'MongoDB', icon: `${ICONS}/mongodb/mongodb-original.svg` },
        { name: 'Cassandra', icon: `${ICONS}/cassandra/cassandra-original.svg` },
        { name: 'SQL Server', icon: `${ICONS}/microsoftsqlserver/microsoftsqlserver-plain.svg` },
      ],
    },
    {
      title: 'skills.tools',
      skills: [
        { name: 'Docker', icon: `${ICONS}/docker/docker-original.svg` },
        { name: 'Unity', icon: `${ICONS}/unity/unity-original.svg` },
        { name: 'Git', icon: `${ICONS}/git/git-original.svg` },
      ],
    },
    {
      title: 'skills.ai',
      skills: [
        { name: 'ChatGPT', icon: '/images/skills/chatgpt.svg' },
        { name: 'Claude', icon: 'https://cdn.simpleicons.org/claude' },
        { name: 'Copilot', icon: 'https://cdn.simpleicons.org/githubcopilot/white' },
        { name: 'OpenCode', icon: '/images/skills/opencode.svg' },
        { name: 'Notebook LM', icon: '/images/skills/notebooklm.svg' },
      ],
    },
  ];
}
