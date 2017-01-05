import { Component, OnInit ,trigger,state,style,animate,transition,keyframes}
 from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
  animations:[
    trigger("testimon",[
      state("active",style({opacity:1})),
      state("inactive",style({opacity:0})),
      /*
      transition("active => inactive" ,animate(100)),
      transition("inactive => active" ,animate('500ms 1s ease-in')),
      */
      transition("void => *",[
        style({opacity:0}),animate('200ms 0.1s ease-in',style({opacity:1}))
      ]),
      transition("* => void",[
        style({opacity:1})
      ])
    ])
  ]
})
export class TestimonialsComponent implements OnInit {
  TestimonialsPeople:any[]=[
      {image:"Testi2.jpg", text:` العديد من الأنواع المتوفرة 
            لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو
            الكلمات العشوائية إلى النص. إن كنت تريد أن تستخدم نص لوريم إيبسوم ما، عليك أن
            تتحقق أولاً أن ليس هناك أي كلمات أو عبارات محرجة أو غير لائقة مخبأة في هذا النص.
            بينما تعمل جميع مولّدات نصوص لوريم`
      ,name:"عبدالله بدير",state:"active"},
       {image:"Testi3.jpg", text:` العديد من الأنواع المتوفرة 
            لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو
            الكلمات العشوائية إلى النص. إن كنت تريد أن تستخدم نص لوريم إيبسوم ما، عليك أن
            تتحقق أولاً أن ليس هناك أي كلمات أو عبارات محرجة أو غير لائقة مخبأة في هذا النص.
            بينما تعمل جميع مولّدات نصوص لوريم`
      ,name:"مريم مصطفى",state:"inactive"},
       {image:"Testi4.png", text:` العديد من الأنواع المتوفرة 
            لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو
            الكلمات العشوائية إلى النص. إن كنت تريد أن تستخدم نص لوريم إيبسوم ما، عليك أن
            تتحقق أولاً أن ليس هناك أي كلمات أو عبارات محرجة أو غير لائقة مخبأة في هذا النص.
            بينما تعمل جميع مولّدات نصوص لوريم`
      ,name:"ابراهيم السيد",state:"inactive"},
       {image:"Testi5.jpg", text:` العديد من الأنواع المتوفرة 
            لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو
            الكلمات العشوائية إلى النص. إن كنت تريد أن تستخدم نص لوريم إيبسوم ما، عليك أن
            تتحقق أولاً أن ليس هناك أي كلمات أو عبارات محرجة أو غير لائقة مخبأة في هذا النص.
            بينما تعمل جميع مولّدات نصوص لوريم`
      ,name:"ياسمين غنيم",state:"inactive"}
  ]
  constructor() { }
  TestimonialIndex:number;
  ngOnInit() {
  }
  chevLeftClicked(){
    var index= -1;
    for(let i=0;i<this.TestimonialsPeople.length;i++){
        if(this.TestimonialsPeople[i].state === "active"){
            index=i;
            break;
        }
    }
    if(index==3){
        this.TestimonialsPeople[3].state="inactive";
        this.TestimonialsPeople[0].state="active";  
        return;
    }
    this.TestimonialsPeople[index].state="inactive";
    this.TestimonialsPeople[index +1].state="active";
  }
  chevRightClicked(){
    var index= -1;
    for(let i=0;i<this.TestimonialsPeople.length;i++){
        if(this.TestimonialsPeople[i].state === "active"){
            index=i;
            break;
        }
    }
    if(index==0){
        this.TestimonialsPeople[index].state="inactive";
        this.TestimonialsPeople[3].state="active";  
        return;    
    }
    this.TestimonialsPeople[index].state="inactive";
    this.TestimonialsPeople[index -1].state="active";
  }
}
