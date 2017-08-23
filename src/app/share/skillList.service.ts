import {Skill} from '../model/skill';
import {Subject} from 'rxjs/Subject';

export class SkillList{
  dataUpdate = new Subject();
  skillSet: Skill[];
  private skillObj: Skill;

  constructor() {
    this.skillSet = [];
  }

  addSkill (skill:string, year:number) {
    this.skillObj = new Skill(this.skillSet.length + 1, skill, year);
    this.skillSet.push(this.skillObj);
    this.dataUpdate.next(this.skillSet);
  }

  deleteSkill (index:number) {
    this.skillSet.splice(index, 1);
    this.dataUpdate.next(this.skillSet);
  }

  updateSkill (index:number, skill:Skill) {
    this.skillSet[index-1].skillName = skill.skillName;
    this.skillSet[index-1].numYears = skill.numYears;
    //this.dataUpdate.next(this.skillSet);
  }
}
