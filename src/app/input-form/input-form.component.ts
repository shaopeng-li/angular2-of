import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Skill } from '../model/skill';
import { DayList } from '../model/date';
import { MonthList } from '../model/date';
import { DayMillisec } from '../model/date';


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
  dateList: string[];
  dayList: string[];

  constructor() {
    this.onSkillAdded = new EventEmitter<object>();
    this.dayList = DayList;
  }

  onSubmit (): void {
      this.skillObj = new Skill(this.skill, this.year);
      this.onSkillAdded.emit(this.skillObj);

      this.skill = '';
      this.year = undefined;
  }

  ngOnInit() {
    let dateList: string[] = [];
    let current = Date.now();
    for (let i = 0; i < 7; i++) {
       let currentDay = new Date(current);
       let str = "";
       str = `${this.dayList[currentDay.getDay()]} ${MonthList[currentDay.getMonth()]}/${currentDay.getDate()}/${currentDay.getFullYear()}`;
       dateList.push(str);
       current -= DayMillisec;
    }
    this.dateList = dateList;
  }

}
