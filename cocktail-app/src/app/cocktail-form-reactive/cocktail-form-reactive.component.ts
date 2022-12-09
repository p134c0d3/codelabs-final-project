import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cocktail-form-reactive',
  templateUrl: './cocktail-form-reactive.component.html',
  styleUrls: ['./cocktail-form-reactive.component.css']
})
export class CocktailFormReactiveComponent {
  reactiveForm: FormGroup;
  formHasBeenSubmitted = false;

  onFormSubmit(){
    this.formHasBeenSubmitted = true;
    setTimeout(() => {
      this.reactiveForm.reset();
      this.formHasBeenSubmitted = false;
    }, 5000);

  }
  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      cocktail: new FormControl(null),
      ingredients: new FormControl(null),
      glass: new FormControl(null)
    });
  }
  constructor() {}
}
