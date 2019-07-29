import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent implements OnInit {

  emailForm: FormGroup; 

  constructor(private _form: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
  }

  createForm() {
    this.emailForm = this._form.group({
      name: new FormControl,
      email: new FormControl,
      message: new FormControl
    })
  }

  onSubmit() {
    this.http.post('https://formspree.io/drewawright@gmail.com', {
      name: this.emailForm.value.name,
      email: this.emailForm.value.email,
      message: this.emailForm.value.message
    });
  }

}
