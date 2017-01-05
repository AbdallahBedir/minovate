import { Component, OnInit } from '@angular/core';
import{ServiceSectionsService} from './service-sections.service';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss']
})
export class OurServicesComponent implements OnInit {
  serviceSections:any[];
  constructor(private _serviceSectionsService:ServiceSectionsService) {
      this.serviceSections=this._serviceSectionsService.serviceSections;
   }

  ngOnInit() {
  }

}
