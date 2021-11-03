import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  goToSection(sectionName: string) {
    document.getElementById(sectionName)?.scrollIntoView({ behavior: "smooth"});
  }

}
