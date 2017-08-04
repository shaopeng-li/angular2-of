import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'skill-component',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  @Input() skill: string;
  @Input() index: number;
  @Output() itemDeleted = new EventEmitter<number>();

  constructor() { }

  deleteItem () : void {
    this.itemDeleted.emit(this.index);
  }

  ngOnInit() {
  }

}
