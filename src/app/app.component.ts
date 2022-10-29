import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent
{
  title = 'form-builder';
  SignUpForm = [
    {
      "field": "name",
      "label": "Name",
      "type": "text",
      "hidden": false,
      "mandatory": true
    },
    {
      "field": "email",
      "label": "Email",
      "type": "text",
      "hidden": false,
      "mandatory": true
    },
    {
      "field": "confirm",
      "label": "Checkbox with confirmation",
      "type": "check",
      "hidden": false,
      "mandatory": true
    },
    {
      "field": "hiddenField",
      "label": "",
      "type": "text",
      "hidden": true,
      "mandatory": false
    }
  ];

  OnSubmit(value: any)
  {
    console.log('result: ', value);
  }
}
