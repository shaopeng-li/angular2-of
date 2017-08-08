import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Skill } from '../model/skill';


@Component({
  selector: 'input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css'],
  outputs: ['onSkillAdded']
})
export class InputFormComponent implements OnInit {
  onSkillAdded: EventEmitter<object>;
  skill: string;
  year: number;
  skillObj: Skill;

  constructor() {
    this.onSkillAdded = new EventEmitter<object>();
  }

  addSkill (skill: HTMLInputElement): void {
    console.log(skill.value);
  }

  clickAdd (): void {
      this.skillObj = new Skill(this.skill, this.year);
      this.onSkillAdded.emit(this.skillObj);

      this.skill = '';
      this.year = undefined;
  }

  ngOnInit() {
  }

}
