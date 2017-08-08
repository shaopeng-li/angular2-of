import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { Skill } from '../model/skill';

@Component({
  selector: 'skill-component',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css'],
  inputs: ['skill', 'index'],
  outputs: ['itemDeleted']
})
export class SkillComponent implements OnInit {
  skill: Skill;
  index: number;
  itemDeleted: EventEmitter<number>;

  constructor() {
    this.itemDeleted = new EventEmitter<number>();
  }

  deleteItem (e) : void {
    e.preventDefault();
    this.itemDeleted.emit(this.index);
  }

  ngOnInit() {
  }

}
