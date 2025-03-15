import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../../core/services/auth.service';
import { AuthfakeauthenticationService } from '../../../core/services/authfake.service';
import { login } from 'src/app/store/Authentication/authentication.actions';
import {  Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ToastService } from 'src/app/core/services/toast.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.scss']
})
/**
 * Login-2 component
 */
export class Login2Component implements OnInit {

  constructor(
    private formBuilder: UntypedFormBuilder, 
    private router: Router, private authenticationService: AuthenticationService,
    private authFackservice: AuthfakeauthenticationService, public store: Store,
    private readonly toastService: ToastService,private http: HttpClient,
  
  ) { }
  loginForm: UntypedFormGroup;
  submitted: any = false;
  error: any = '';
  returnUrl: string;

  // set the currenr year
  year: number = new Date().getFullYear();
  @ViewChild('passwordInput') passwordInput!: ElementRef;
  ngOnInit(): void {
    document.body.classList.add("auth-body-bg");
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      pass: [''],
    });
    // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // swiper config
  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true
  };

  // convenience getter for easy access to form fields
  get username(){
    return this.loginForm.get('username')
  }
  get pass(){
    return this.loginForm.get('pass')
  }

  /**
   * Form submit
   */

  passwordType: string = 'password';
  show: boolean = false;

  onShowPass() {
    this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
    this.show = !this.show;
    this.passwordInput.nativeElement.type = this.passwordType;
  }
  onSubmit() {
    debugger
    this.submitted = true;
    console.log(this.loginForm.value)
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    else {

      // alert("Login")




      this.http.post(environment.baseUrl + 'auth', this.loginForm.value).subscribe((resp: any) => {
        debugger

        console.log("Resp", resp.STATUS_CODE)


        localStorage.setItem('session_id', resp.session_id);
        localStorage.setItem('access_token', resp.access_token)
        sessionStorage.setItem('user_Info', JSON.stringify(resp.userInfo))
        let obj = {
          URL: 'common/getUserSpdata',
          name: 'Sel_GetModuleWiseMainMenu',
          params: [`@chrCompanyID='${resp.userInfo.COMPANY_ID}',@chrUserId=N'${resp.userInfo.USER_ID}',@chrModuleNo=N'${resp.userInfo.MODULE_NO}',@intLoginIdentity=${resp.userInfo.STATUS_CODE}`],
          multiflag: 1
        }
        this.http.post(environment.baseUrl + obj.URL, obj).subscribe(res => {
          localStorage.setItem('MenuBar', JSON.stringify(res))
          // this.router.navigateByUrl('/pages');
          this.router.navigate(['/pages']);
        })


      }, error => {
        console.log(error.STATUS_CODE);
        // this.router.navigateByUrl('/pages');
        this.router.navigate(['/pages']);

      });
    }


  }
}    
     
