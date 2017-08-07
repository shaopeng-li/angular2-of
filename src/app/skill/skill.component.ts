import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'skill-component',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css'],
  inputs: ['skill', 'index'],
  outputs: ['itemDeleted']
})
export class SkillComponent implements OnInit {
  skill: string;
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
