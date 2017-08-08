import { Component, OnInit } from '@angular/core';
import { Skill } from '../model/skill';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
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
