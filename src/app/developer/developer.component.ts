import { Component, OnInit } from '@angular/core';
import { Skill } from '../models/dev-skills.model';
import { Developer } from '../models/developer.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {

  developer: Developer = new Developer('Doe',
  'John',
  40,
  'non-binaire',
  'inconnu',
  [new Skill(
    'js',
    'ts',
    'angular'
  )]);

    // skills: Skill = new Skill('js',
    // 'ts',
    // 'angular');
  constructor() { }

  ngOnInit(): void {
  }

}
