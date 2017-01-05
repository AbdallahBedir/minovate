import { Component, OnInit,trigger ,state,style,animate,
  transition,keyframes,Input,Output,EventEmitter } 
  from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations:[
    trigger("openSubMenu",[
      transition("void => *",[
        style({height:0}),animate(500,style({height:'*'}))
      ]),
      transition("* => void",[
        style({height:'*'}),animate(500,style({height:0}))
      ])
    ]),
    trigger("rotateChevron",[
      state("true",style({transform:'rotate(180deg)'})),
      state("false",style({transform:'rotate(0)'})),
      transition("1 <=> 0",animate('500ms ease-in-out'))
    ]),
    trigger("sidebar",[
      transition("void => *",[
          style({right:'-300px'}),animate('300ms ease-in',style({right:0}))
      ]),
      transition("* => void",[
        style({right:0}),animate('300ms ease-out',style({right:'-300px'}))
      ])
    ]),
    trigger("firstSpan",[
        state("true",style({transform:'rotate(45deg)',top:'10px',width:'18px'})),
        state("false",style({transform:'rotate(0)',top:0,width:'22px'})),
        transition("0 <=> 1",animate(300))
    ]),
    trigger("middleSpan",[
        state("true",style({opacity:0})),
        state("false",style({opacity:1})),
        transition("0 <=> 1",animate(300))
    ]),
    trigger("lastSpan",[
        state("true",style({transform:'rotate(-45deg)',top:'10px',width:'18px'})),
        state("false",style({transform:'rotate(0)',top:'12px',width:'22px'})),
        transition("0 <=> 1",animate(300))
    ])
  ]
})
export class NavbarComponent implements OnInit {
  SubMenuExpanded:boolean=false;
  @Input() sideBarExpanded:boolean=false;
  @Output() sideBarChanged = new EventEmitter();
  constructor() { 

  }
  ngOnInit() {
  
  }
  ToggleSubMenu(){
    this.SubMenuExpanded= !this.SubMenuExpanded;
  }
  toggleSideBar(event:Event){
    event.stopPropagation();
    this.sideBarExpanded=!this.sideBarExpanded;
    this.sideBarChanged.emit({newValue:this.sideBarExpanded});
  }
  
}
