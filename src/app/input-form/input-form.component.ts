import { Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit {
  @Output() onSkillAdded = new EventEmitter<string>();

  constructor() { }

  addSkill (skill: HTMLInputElement): void {
    console.log(skill.value);
    this.onSkillAdded.emit(skill.value);
    skill.value = '';
  }

  ngOnInit() {
  }

}
