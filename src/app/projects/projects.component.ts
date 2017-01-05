import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects:any[]=[
    {title:"نفق اوراسيا",img:"1"},
    {title:"جسر البسفور",img:"2"},
    {title:"متحف الملك الصالح",img:"3"},
    {title:"كوبرى اسطنبول المعلق",img:"4"}
  ]
  constructor() { 

  }

  ngOnInit() {
  }

}
