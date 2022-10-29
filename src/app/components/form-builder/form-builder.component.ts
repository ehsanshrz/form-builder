import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit
{
  @Input() formObject: any;
  @Output() onSubmit: any = new EventEmitter();
  fromGroup: FormGroup = new FormGroup({});

  constructor()
  {
  }

  getFromGroup()
  {
    const formControls = this.formObject.reduce((acc: any, curr: any) =>
    {
      const formControl = new FormControl();
      acc[curr.field] = formControl;
      return acc;
    }, {});
    return new FormGroup(formControls);
  }
  onSubmitClicked()
  {
    this.onSubmit.emit(this.fromGroup.value);
  }
  ngOnInit(): void
  {
    this.fromGroup = this.getFromGroup();
  }

}
