import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { FormBuilder, FormGroup, AbstractControl, Validators} from '@angular/forms';

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
  updateForm: FormGroup;
  skillName: AbstractControl;
  years: AbstractControl;

  constructor(
    private sl: SkillList,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder ) { }

  ngOnInit() {
  	this.index = this.route.snapshot.params['id'];
    this.skill = {...this.sl.skillSet[this.index-1]};
    this.createForm();
  }

  // initial form contorl
  createForm (): void {
    this.updateForm = this.formBuilder.group({
      skillName: ['', Validators.required],
      years: ['', Validators.required]
    });

    this.skillName = this.updateForm.controls['skillName'];
    this.years = this.updateForm.controls['years'];
  }

  submitChange(): void {
    this.sl.updateSkill(this.index, this.skill);
    this.navBack();
  }

  clearInput(): void {
    this.skill = {...this.sl.skillSet[this.index-1]};
  }

  navBack(): void {
  	this.router.navigate(['/skillList']);
  }

}
