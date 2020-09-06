import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent implements OnInit {
  /** variable declaration */

  public personalDetailsFormGroup: FormGroup;

  /** constructor class */

  constructor(private fb: FormBuilder) {}

  /** private methods */

  private createFormGroup() {
    this.personalDetailsFormGroup = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: [''],
      email: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      comments: [''],
      gender: [''],
      address: this.fb.group({
        street: ['', [Validators.required]],
        city: ['', [Validators.required]],
        state: ['', [Validators.required]],
        zip: ['', [Validators.required]],
        phoneNumber: ['', [Validators.required]],
      }),
    });
  }

  /** public methods */

  public onSave() {
    console.log(this.personalDetailsFormGroup.value);
  }

  public onCancel() {
    this.personalDetailsFormGroup.reset();
  }

  ngOnInit(): void {
    this.createFormGroup();
  }
}
