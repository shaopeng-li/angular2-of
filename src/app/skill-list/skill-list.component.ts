import { Component, OnInit } from '@angular/core';
import { Skill } from '../model/skill';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.css']
})
export class SkillListComponent implements OnInit {
  name: string;
  skillSet: Skill[];

  constructor() {
    this.name = 'Shaopeng Li';
    this.skillSet = [];
  }

  addSkills(skill: Skill) {
    this.skillSet.push(skill);
  }

  getIndex(index: number) {
    this.skillSet.splice(index, 1);
  }

  ngOnInit() {
  }

}
