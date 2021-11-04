import { Component, OnInit } from '@angular/core';
import jobsDataSource from '../../../assets/JsonSource/my-resume-input.json';

interface ITechnologies {
  name: string,
  iconPath: string
}

interface IJobs {
  id: number,
  company: string,
  date: string,
  role: string,
  description: string,
  logo: string,
  activities: string[]
  technologies: ITechnologies[]
}

@Component({
  selector: 'app-my-resume',
  templateUrl: './my-resume.component.html',
  styleUrls: ['./my-resume.component.css']
})
export class MyResumeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  jobs: IJobs[] = jobsDataSource;

}
