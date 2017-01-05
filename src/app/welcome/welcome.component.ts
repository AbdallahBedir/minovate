import { Component, OnInit } from '@angular/core';
import {WelcomeSectionsService} from './welcome-sections.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  outroSectios:any[];
  constructor(private _welcomeSectionsService:WelcomeSectionsService) {
    this.outroSectios=this._welcomeSectionsService.sections;
   }

  ngOnInit() {
  }

}
