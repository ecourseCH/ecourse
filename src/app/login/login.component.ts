import { Component } from '@angular/core';

import {  FormGroup, FormBuilder, Validators } from '@angular/forms';


// TODO why can we not do this via including our own routing module?
//import { AppRoutingModule, Router } from '../app-routing.module';

import { RouterModule, Router } from '@angular/router';

import { AppRoutingModule } from '../app-routing.module';


import { AuthService } from '../auth.service';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    form:FormGroup;

    constructor(private fb:FormBuilder, 
                 private authService: AuthService, 
                 private router: Router) {

        this.form = this.fb.group({
            email: ['',Validators.required],
            password: ['',Validators.required]
        });
    }

    login() {
        const val = this.form.value;

        if (val.email && val.password) {
            this.authService.login(val.email, val.password)
                .subscribe(
                    () => {
                        console.log("User is logged in");
                        this.router.navigateByUrl('/');
                    }
                );
        }
    }
}