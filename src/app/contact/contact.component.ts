import { Component, OnInit  } from '@angular/core';
import {FormControl,FormGroup,FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm:FormGroup;
  name:FormControl;
  email:FormControl;
  phone:FormControl;
  message:FormControl;
  FormSubmitted:boolean=false;
  TrySubmite:boolean=false;
  
  constructor(Builder:FormBuilder) {
      this.name=new FormControl('',Validators.required);
      this.email=new FormControl('',Validators.required);
      this.phone=new FormControl('',Validators.required);
      this.message=new FormControl('',[]);
      this.contactForm=Builder.group({
          name:this.name,
          phone:this.phone,
          email:this.email,
          message:this.message
      });
   }
  ngOnInit() {
  }
  onSubmit(x:FormGroup){
    this.FormSubmitted= x.valid ? true : false;
    this.TrySubmite=true;
  }
} 
