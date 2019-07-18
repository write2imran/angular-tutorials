import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './models/user';
import { AuthenticationService } from './services/authenticationservice';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  currentUser: User;

  constructor(private authenticationService: AuthenticationService){

    
  }

  

  
  
}
