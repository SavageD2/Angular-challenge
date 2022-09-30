import { Component, Input, OnInit } from '@angular/core';
import { Skill } from '../models/dev-skills.model';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  //skillChild ici est de type Skill qui se trouve être l'objet
  //que je m'attends à recevoir de son parent qu'est DeveloperComponent.
  @Input() skillChild: Skill= new Skill('','','');

  constructor() { }

  ngOnInit(): void {
  }

}
