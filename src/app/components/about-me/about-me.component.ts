import { Component, OnInit } from '@angular/core';
import FactsAboutMeDataSource from '../../../assets/JsonSource/facts-about-me.json';

interface IFactsAboutMe {
  BackgroundImage: string;
  Title: string;
  Body: string;
}

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  factList: IFactsAboutMe[] = FactsAboutMeDataSource;
  constructor() { }

  ngOnInit(): void {
  }

}
