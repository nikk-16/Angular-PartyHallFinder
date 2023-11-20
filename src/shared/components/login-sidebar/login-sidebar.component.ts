
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors, ValidatorFn, FormControl } from '@angular/forms';
import { ActivatedRoute, Router, RouterStateSnapshot } from '@angular/router';
import { User, Credentials, Owner, SingupDetails } from 'src/shared/models/user.model';
import { PartyHallService } from 'src/shared/services/party-hall.service';
import { UserServiceService } from 'src/shared/services/user-service.service';



@Component({
  selector: 'app-login-sidebar',
  templateUrl: './login-sidebar.component.html',
  styleUrls: ['./login-sidebar.component.css']
})
export class LoginSidebarComponent {
  @Input() use!: string;
  main: boolean = false;
  sideLogin: boolean = false;
  sideSignup: boolean = false;
  owner!: Owner;
  user!: User;
  id!: string;

  submitted = false;
  isWorking = false;
  
  creds!: Credentials;
  params!: string;
  signupForm!: FormGroup;
  constructor(private router: Router, private activeRoute: ActivatedRoute, private userService: UserServiceService, private partyService: PartyHallService, private fb : FormBuilder) {
    this.signupForm = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.minLength(8), Validators.maxLength(15),
        this.patternValidator(/\d/, { hasNumber: true }),
        this.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
        this.patternValidator(/[a-z]/, { hasSmallCase: true }),
        this.patternValidator(/[!@#$%^&*(),.?":{}|<>]/, { hasSpecialCharacters: true }),
      ]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', Validators.required],
      dob: ['', Validators.required],
      img: ['']
    })
  }
  ngAfterViewInit() {
    this.params = this.activeRoute.snapshot.params['role'];
    console.log(this.params)
  }
  signinForm = new FormGroup(
    {
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', Validators.compose([ Validators.required, Validators.minLength(8),
          this.patternValidator(new RegExp("(?=.*[0-9])"), {
            requiresDigit: true
          }),
          this.patternValidator(new RegExp("(?=.*[A-Z])"), {
            requiresUppercase: true
          }),
          this.patternValidator(new RegExp("(?=.*[a-z])"), {
            requiresLowercase: true
          }),
          this.patternValidator(new RegExp("(?=.*[$@^!%*?&])"), {
            requiresSpecialChars: true
          })
        ])
      ),
    }
  );


  onLoginSubmit() {
    this.submitted = true;
    const body = { ...this.signinForm.value } as Credentials;
    this.userService.getLoginUser(body, this.params).subscribe((user: any) => {
      if (this.params === 'user') {
        this.id = user.id;
        console.log(user.Id);
      }
      else if(this.params === 'owner') {
        // this.owner = user as Owner;
        this.id = user.id;
        console.log(this.id);
      }
      else {
        this.id = user.id;
        console.log(this.id);
      }
      if (this.params === 'user') {
        // if (this.id !== undefined) {
        //   if (this.activeRoute.snapshot.params['Id']) {
        //     console.log(this.activeRoute.snapshot.params['Id'])
        //     this.partyService.setViewingId(this.id, this.activeRoute.snapshot.params['Id']).subscribe(data => {
        //     })
        //     let partyHallId = '';
        //     this.partyService.getViewingId(this.id).subscribe((data: any) => {
        //       this.router.navigate([ this.params, this.id]);
        //     })
        //   }
        //   else {
            this.router.navigate([this.params, this.id,'home']);
          // }
        }
      // }
      else if(this.params === 'owner'){
        this.id = user.id;
        this.router.navigate([ this.params, this.id, 'dashboard']);
      }
      else if(this.params === 'admin'){
        this.id = user.id;
        this.router.navigate([ this.params, this.id, 'home']);
      }
    });
  }

  onSignupSubmit() {
    this.submitted = true;
    console.log(this.signupForm.value);
    const body = { ...this.signupForm.value } as SingupDetails;
    body.img = 'https://loremflickr.com/640/480/people';
    console.warn(body);
    this.userService.signupUser(body, this.params).subscribe((user: any) => {
      console.log(user);
      if (this.params === 'user') {
        this.id = user.id;
        this.router.navigate([this.params, this.id, 'home']);
      }
      else if(this.params === 'owner') {
        this.id = user.id;
        this.router.navigate([this.params, this.id, 'dashboard']);
      }
      else if(this.params === 'admin'){
        this.id = user.id;
        this.router.navigate([ this.params, this.id, 'home']);
      }
    });
  }

  // convenience getter for easy access to form controls
  get f() {
    return this.signinForm.controls;
  }

  get passwordValid() {
    return this.signinForm.controls["password"].errors === null;
  }

  get requiredValid() {
    return !this.signinForm.controls["password"].hasError("required");
  }

  get minLengthValid() {
    return !this.signinForm.controls["password"].hasError("minlength");
  }

  get requiresDigitValid() {
    return !this.signinForm.controls["password"].hasError("requiresDigit");
  }

  get requiresUppercaseValid() {
    return !this.signinForm.controls["password"].hasError("requiresUppercase");
  }

  get requiresLowercaseValid() {
    return !this.signinForm.controls["password"].hasError("requiresLowercase");
  }

  get requiresSpecialCharsValid() {
    return !this.signinForm.controls["password"].hasError("requiresSpecialChars");
  }



  toggleSidebar() {
    this.main = !this.main;
  }

  toggleSignin() {
    this.sideLogin = !this.sideLogin;
    if (this.sideSignup === true) this.sideSignup = !this.sideSignup;
  }

  toggleSignup() {
    this.sideSignup = !this.sideSignup;
    if (this.sideLogin === true) this.sideLogin = !this.sideLogin;
  }

  patternValidator(regex: RegExp, error: ValidationErrors): ValidatorFn | null {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (!control.value) {
        // if the control value is empty return no error.
        return null;
      }

      // test the value of the control against the regexp supplied.
      const valid = regex.test(control.value);

      // if true, return no error, otherwise return the error object passed in the second parameter.
      return valid ? null : error;
    };
  }

  MatchValidator(control: AbstractControl) {
    const password: string = control.get("password")?.value; // get password from our password form control
    const confirmPassword: string = control.get("confirmPassword")?.value; // get password from our confirmPassword form control

    // if the confirmPassword value is null or empty, don't return an error.
    if (!confirmPassword?.length) {
      return null;
    }

    // if the confirmPassword length is < 8, set the minLength error.
    if (confirmPassword.length < 8) {
      control.get('confirmPassword')?.setErrors({ minLength: true });
    } else {
      // compare the passwords and see if they match.
      if (password !== confirmPassword) {
        control.get("confirmPassword")?.setErrors({ mismatch: true });
      } else {
        // if passwords match, don't return an error.
        return null;
      }
    }

    // return an error if we get here.
    return { error: true };
  }
}
