import { Component, OnInit } from '@angular/core';
import { 
    FormBuilder, 
    FormGroup, 
    Validators, 
    FormControl } from '@angular/forms';

@Component({
  selector: 'project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {

  name = new FormControl('Enter name...');  


  email = new FormControl('');
  password = new FormControl('');
  checkmeout = new FormControl('');

  constructor() { }

  ngOnInit() {

  }

  ngSubmit() {

  }

}
