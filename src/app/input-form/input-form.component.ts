import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, Validators} from '@angular/forms';
import { DayList, MonthList, DayMillisec} from '../model/date';
import {SkillList} from '../share/skillList.service';

@Component({
  selector: 'input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit {
  skill: string;
  year: number;
  dateList: string[];
  dayList: string[];
  skillForm: FormGroup;
  skillName: AbstractControl;
  years: AbstractControl;

  constructor(private fb: FormBuilder, private sl: SkillList) {}

  // initial form contorl
  createForm (): void {
    this.skillForm = this.fb.group({
      skillName: ['', Validators.required],
      years: ['', Validators.required]
    });

    this.skillName = this.skillForm.controls['skillName'];
    this.years = this.skillForm.controls['years'];
  }

  // initial date
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

  onSubmit (): void {
      // add skill through service, and store skill list inside service
      this.sl.addSkill(this.skill, this.year);

      this.skill = '';
      this.year = undefined;
  }



  detectInputChange (event: KeyboardEvent) {
    if (event.key === "Enter") {
      this.onSubmit();
      this.skillForm.reset();
    }
  }

  ngOnInit() {
    // get static content day list from service
    this.dayList = DayList;
    this.createDate();
    this.createForm();
  }

}
