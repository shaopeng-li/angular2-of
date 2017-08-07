import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  name: string;
  skillSet: string[];

  constructor() {
    this.name = 'Shaopeng Li';
    this.skillSet = [];
  }

  addSkills(skill: string) {
    this.skillSet.push(skill);
  }

  getIndex(index: number) {
    this.skillSet.splice(index, 1);
  }

  ngOnInit() {
  }

}
