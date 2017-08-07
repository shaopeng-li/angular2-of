import { Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css'],
  outputs: ['onSkillAdded']
})
export class InputFormComponent implements OnInit {
  onSkillAdded: EventEmitter<object>;

  constructor() {
    this.onSkillAdded = new EventEmitter<object>();
  }

  addSkill (skill: HTMLInputElement): void {
    console.log(skill.value);

  }

  clickAdd (skill: HTMLInputElement, year: HTMLInputElement): void {
      var newSkill = {};
      newSkill['skillName'] = skill.value;
      newSkill['numYears'] = year.value;

      this.onSkillAdded.emit(newSkill);

      skill.value = '';
      year.value = '';
  }

  ngOnInit() {
  }

}
