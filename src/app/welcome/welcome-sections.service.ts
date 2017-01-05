import { Injectable } from '@angular/core';

@Injectable()
export class WelcomeSectionsService {
  sections=[
    {title:"إلتزامات المبانى",symbol:"zmdi-balance"},
    {title:"صيانه دورية",symbol:"zmdi-settings"},
    {title:"أسعار منافسة",symbol:"zmdi-money-box"},
    {title:"خبرات موثقة",symbol:"zmdi-star"},
  ]
  constructor() { }

}
