import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-achievments',
  templateUrl: './achievments.component.html',
  styleUrls: ['./achievments.component.scss']
})
export class AchievmentsComponent implements OnInit {
  achievments:any[]= [
      {stat:2500,desc:"موظف حول العالم",symbol:"accounts"},
      {stat:90,desc:"عميل سعيد",symbol:"mood"},
      {stat:760,desc:"مشروع منتهى",symbol:"case-check"},
      {stat:20,desc:"سنة خيرة",symbol:"bookmark"}
  ]
  constructor() {

   }

  ngOnInit() {
  }

}
