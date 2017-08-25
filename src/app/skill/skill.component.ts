import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { Router } from '@angular/router';
import { SkillList } from '../share/skillList.service';
import { Skill } from '../model/skill';

@Component({
  selector: 'skill-component',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css'],
  inputs: ['skill', 'index']
})
export class SkillComponent implements OnInit {
  skill: Skill;
  index: number;

  constructor(private sl: SkillList, private router: Router) {}

  deleteItem (e) : void {
    e.preventDefault();
    this.sl.deleteSkill(this.index);
  }

  showDetail(): void {
    this.router.navigate(['/skillDetail', this.index+1]);
    //this.router.navigate([this.index+1], {relativeTo: this.route});
  }

  ngOnInit() {
  }

}
