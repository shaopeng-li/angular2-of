import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, Validators} from '@angular/forms';
import { Skill } from '../model/skill';
import { DayList, MonthList, DayMillisec} from '../model/date';

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
  skillForm: FormGroup;
  skillName: AbstractControl;
  years: AbstractControl;

  constructor(private fb: FormBuilder) {
    this.onSkillAdded = new EventEmitter<object>();
    this.dayList = DayList;
    this.createDate();
    this.createForm();
  }

  createForm (): void {
    this.skillForm = this.fb.group({
      skillName: ['', Validators.required],
      years: ['', Validators.required]
    });

    this.skillName = this.skillForm.controls['skillName'];
    this.years = this.skillForm.controls['years'];
  }

  onSubmit (): void {
      this.skillObj = new Skill(this.skill, this.year);
      this.onSkillAdded.emit(this.skillObj);

      this.skill = '';
      this.year = undefined;
  }

  createDate (): void {
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

  ngOnInit() {

  }

}
