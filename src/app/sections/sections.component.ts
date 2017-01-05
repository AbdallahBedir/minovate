import { Component, OnInit,
        trigger,
        state,
        style,
        transition,
        animate,
        keyframes
          
} from '@angular/core';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss'],
  animations:[
    trigger("section",[
        transition("void => *",[
          style({opacity:0}),
          animate('100ms 0.1s ease-in')
        ]),
        transition("* => void",[
          style({opacity:1})
      ])
    ]),
    trigger("moveBodyPanel",[
      transition("void => *",[
        style({height:0}),animate('300ms',style({height:'*'}))
      ]),
      transition("* => void",[
        style({height:'140px'}),animate('300ms',style({height:0,'padding-top':0,'padding-bottom':0}))
      ])
    ]),
    trigger("plusSign",[
      transition("void => *",[
        style({opacity:0}),animate(150,style({opacity:1}))
      ]),
      transition("* => void",[
        style({opacity:1}),animate(150,style({opacity:0}))
      ])
    ])
  ]
})
export class SectionsComponent implements OnInit {
  itemClicked:number =0;
  sectionTitles:string[]=["قسم الإنشائات","قسم الترميمات","قسم التخطيط","قسم الهندسة المعمارية"]
  constructor() { 
    
  }

  ngOnInit() {
  }

  whichItemClicked(item){
    this.itemClicked=item;
  }
}
