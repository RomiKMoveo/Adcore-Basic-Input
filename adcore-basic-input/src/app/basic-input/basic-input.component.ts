import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {
  FormControl,
  FormGroupDirective,
  FormsModule,
  NgForm,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ErrorStateMatcher } from '@angular/material/core';

/**
 * @title Input with a clear button
 */
@Component({
  selector: 'app-basic-input',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './basic-input.component.html',
  styleUrl: './basic-input.component.css',
})
export class BasicInputComponent {
  value = '';
  placeholder = 'Company name';
  isDisabled = false;
  hasFocus: boolean = false;
  errorValue = '';
  isError: boolean = false;

  // Called when the input loses focus to check for validation
  validateInput(): void {
    this.isError = !this.errorValue; // Set to true if the input is empty
  }

  // Clears the input and the error state
  clearErrorInput(): void {
    this.errorValue = '';
    this.isError = false;
  }
  clearInput() {
    this.value = '';
  }
}
