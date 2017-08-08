import { Component, EventEmitter, OnInit, Output} from '@angular/core';

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

  constructor() {
    this.onSkillAdded = new EventEmitter<object>();
  }

  addSkill (skill: HTMLInputElement): void {
    console.log(skill.value);

  }

  clickAdd (): void {
      var newSkill = {};
      newSkill['skillName'] = this.skill;
      newSkill['numYears'] = this.year;

      this.onSkillAdded.emit(newSkill);

      this.skill = '';
      this.year = undefined;
  }

  ngOnInit() {
  }

}
