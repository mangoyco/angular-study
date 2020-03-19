import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder,FormArray } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.sass']
})
export class ProfileEditorComponent implements OnInit {

  // profileForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   address: new FormGroup({
  //     street: new FormControl(''),
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     zip: new FormControl('')
  //   })
  // });
  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  profileForm = this.fb.group({
    firstName: ['',],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });

  addAlias() {
    // console.log(this.profileForm.get('aliases'))
    this.aliases.push(this.fb.control(''));
  }

  onSubmit() {
    console.log(this.profileForm)
  }

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
  }

  updateProfile() {
    // this.profileForm.setValue({
    //   firstName: 'Nancy',
    //   lastName:''
    // })
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }

}
