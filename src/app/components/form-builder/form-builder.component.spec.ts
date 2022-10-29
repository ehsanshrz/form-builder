import { FormBuilderComponent } from './form-builder.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

let component: FormBuilderComponent;
let fixture: ComponentFixture<FormBuilderComponent>;
let button: HTMLElement;
let signUpForm = [
  {
    field: "name",
    "label": "Name",
    "type": "text",
    "hidden": false,
    "mandatory": true
  },
  {
    field: "email",
    "label": "Email",
    "type": "text",
    "hidden": false,
    "mandatory": true
  },
  {
    field: "confirm",
    "label": "Checkbox with confirmation",
    "type": "check",
    "hidden": false,
    "mandatory": true
  },
  {
    field: "hiddenField",
    "label": "",
    "type": "text",
    "hidden": true,
    "mandatory": false
  }
];

beforeEach(() => {
  TestBed.configureTestingModule({
    declarations: [ FormBuilderComponent ],
  });
  fixture = TestBed.createComponent(FormBuilderComponent);
  component = fixture.componentInstance; // BannerComponent test instance

  component.formObject = signUpForm;

});

it('form should has a button', () => {
  button = fixture.nativeElement.querySelector('button');
  expect(button.textContent).toContain('Submit');
});

it('should have email input attribute', () => {
  fixture.detectChanges();
  component.fromGroup.controls['email'].setValue('aaa');
  expect(component.fromGroup.controls['email'].value).toContain('aaa');
});

it('should has all elements that exist on json object', () => {
  fixture.detectChanges();
  signUpForm.forEach((item, index) => {
    component.fromGroup.value.hasOwnProperty(item.field);
    expect(component.fromGroup.value.hasOwnProperty(item.field)).toBeTrue();
  })
})
