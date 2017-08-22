import {Skill} from '../model/skill';

export class SkillList{
  skillSet: Skill[];
  private skillObj: Skill;

  constructor() {
    this.skillSet = [];
  }

  addSkill (skill:string, year:number) {
    console.log(`service called and skill is: ${skill} year is ${year}`);
    this.skillObj = new Skill(this.skillSet.length + 1, skill, year);
    this.skillSet.push(this.skillObj);
    console.log(this.skillSet);
  }

  deleteSkill (index:number) {
    this.skillSet.splice(index, 1);
  }
}
