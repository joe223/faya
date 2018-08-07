import { Component, OnInit,ViewChild, Input,Renderer2,forwardRef} from '@angular/core';
import { UserService } from '../user.service';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';



import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR
} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  validateForm: FormGroup;

  @ViewChild('email') email;

  constructor(private fb: FormBuilder,private user:UserService,private renderer:Renderer2
  ) {
  }

  username:string = "";

  sub:any

  state:any= {
    a:1,
    b:2,
    d:3
  };

  ngOnInit(): void {
    
    this.validateForm = this.fb.group({
      userName: [ null, [ Validators.required,Validators.email,Validators.pattern('^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$')] ],
      password: [ null, [ Validators.required ] ],
      remember: [ true ]
    });

    console.log(this,999999);

    this.sub = new Subject();

    this.sub.subscribe((val) => console.log(val,444444));

    this.sub.next(this.state);
 
  }

  test(){

    this.sub.next({
      a:2,
      b:3,
      d:4
    })

  }

  onInputUserName(e){
    // this.sub.next(e.target.value);
    // this.username = ;
  }

  submitForm(): void {
    // for (const i in this.validateForm.controls) {
    //   this.validateForm.controls[ i ].markAsDirty();
    //   this.validateForm.controls[ i ].updateValueAndValidity();
    // }

    console.log(33333,this.validateForm.controls);
  }

  add(data){
    // this.user.find('5b66bdc3cd784d408844e5de')
    // .subscribe(res => {
    //   console.log(res,99999);
    // }, err => {
    //   console.log(err);
    // });
  }


}
