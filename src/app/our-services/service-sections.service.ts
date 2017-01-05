import { Injectable } from '@angular/core';

@Injectable()
export class ServiceSectionsService {
  serviceSections:any[]= [
    {title:"الخبرة",symbol:"zmdi-bookmark"},
    {title:"الجاهزية",symbol:"zmdi-pin"},
    {title:"الالتزام بالمواعيد",symbol:"zmdi-time"}
  ];
  constructor() { 

  }

}
