import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import {SkillList} from '../share/skillList.service';
import {Skill} from '../model/skill';

@Component({
  selector: 'app-skill-detail',
  templateUrl: './skill-detail.component.html',
  styleUrls: ['./skill-detail.component.css']
})
export class SkillDetailComponent implements OnInit {
	index: number;
	skill: Skill;

  constructor(private sl: SkillList, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  	this.index = this.route.snapshot.params['id'];
  	this.skill = this.sl.skillSet[this.index-1];
  }

  navBack(): void {
  	this.router.navigate(['/skillList']);
  }

}
