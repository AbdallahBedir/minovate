import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  khalilList:any[]=["الرئيسية","اخر المشاريع","الدليل","شركات شقيقة","اتصل بنا"];
  kalilAddress:any[]=[
    {symbol:"zmdi-pin",address:"El-Mahalla el-kubra Egypt"},
    {symbol:"zmdi-phone",address:"01122427353"},
    {symbol:"zmdi-email",address:"abdallahahmed2025@gmail.com"},
    {symbol:"zmdi-globe",address:"http://abdallahbedir.comxa.com/"}
  ];
  constructor() { }

  ngOnInit() {
  }

}
