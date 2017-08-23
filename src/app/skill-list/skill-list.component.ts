import { Component, OnInit } from '@angular/core';

import { SkillList } from '../share/skillList.service';
import { Skill } from '../model/skill';

@Component({
  selector: 'skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.css']
})
export class SkillListComponent implements OnInit {
  name: string;
  skillSet: Skill[];

  constructor(private sl: SkillList) {
    this.skillSet = this.sl.skillSet;
  }

  ngOnInit() {
    this.sl.dataUpdate.subscribe((list: Skill[]) => {
      this.skillSet = list;
    },
    (err) => {
      console.log('something wrong happen in this get skillList' + err);
    })
  }

}
