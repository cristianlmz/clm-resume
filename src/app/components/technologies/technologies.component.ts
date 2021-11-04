import { Component, OnInit } from '@angular/core';
import technologiesDataSource from '../../../assets/JsonSource/technologies.json';

interface ITechnologies {
  name: string,
  iconPath: string
}

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  technologies: ITechnologies[] = technologiesDataSource;
}
