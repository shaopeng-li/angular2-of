import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { SkillList } from '../share/skillList.service';
import { Skill } from '../model/skill';

@Component({
  selector: 'skill-component',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css'],
  inputs: ['skill', 'index']
})
export class SkillComponent implements OnInit {
  skill: Skill;
  index: number;

  constructor(private sl: SkillList) {}

  deleteItem (e) : void {
    e.preventDefault();
    this.sl.deleteSkill(this.index);
  }

  ngOnInit() {
  }

}
